import { motion } from 'motion/react';
import { plan } from '../data/guide';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { NoteFields } from './ui/NoteFields';
import { ProgressRing } from './ui/ProgressRing';
import { Reveal, staggerChild, staggerParent } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';
import { TaskItem } from './ui/TaskItem';

const allTasks = plan.weeks.flatMap((w) => w.tasks);
const EMPTY: Record<string, boolean> = {};

export function Plan() {
  const [done, setDone, resetDone] = useLocalStorage<Record<string, boolean>>('plano-tarefas', EMPTY);

  const toggle = (id: string) => setDone((d) => ({ ...d, [id]: !d[id] }));
  const total = allTasks.filter((t) => done[t.id]).length;
  const overall = total / allTasks.length;
  const currentWeek = plan.weeks.find((w) => w.tasks.some((t) => !done[t.id]));

  return (
    <section className="section section--alt" id="plano" aria-labelledby="plano-title">
      <div className="container">
        <SectionHeader eyebrow="Plano de 30 dias" title={plan.title} lead={plan.lead} id="plano-title" />

        <Reveal className="plan__summary">
          <div className="plan__summary-info">
            <ProgressRing value={overall} label="Progresso do plano" />
            <div>
              <strong>
                {total} de {allTasks.length} passos concluídos
              </strong>
              <span aria-live="polite">
                {currentWeek
                  ? `Você está na semana ${currentWeek.number}: ${currentWeek.name}.`
                  : 'Você concluiu os quatro passos. Marque uma data para revisar o plano.'}
              </span>
            </div>
          </div>
          <button type="button" className="link-btn" onClick={resetDone} disabled={total === 0}>
            Desmarcar tudo
          </button>
        </Reveal>

        <motion.div
          className="plan__weeks"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        >
          {plan.weeks.map((week) => {
            const count = week.tasks.filter((t) => done[t.id]).length;
            const ratio = count / week.tasks.length;
            return (
              <motion.article
                key={week.id}
                variants={staggerChild}
                className={`card card--lift week${ratio === 1 ? ' week--done' : ''}`}
                aria-labelledby={`week-${week.id}`}
              >
                <span className="week__num">0{week.number}</span>
                <span className="kicker">Semana {week.number}</span>
                <h3 className="week__name" id={`week-${week.id}`}>
                  {week.name}
                </h3>
                <p className="week__summary">{week.summary}</p>
                <div
                  className="week__bar"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={week.tasks.length}
                  aria-valuenow={count}
                  aria-label={`Semana ${week.number}: ${count} de ${week.tasks.length}`}
                >
                  <motion.div
                    initial={false}
                    animate={{ scaleX: ratio }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <ul className="tasks">
                  {week.tasks.map((t) => (
                    <TaskItem key={t.id} id={t.id} label={t.label} checked={!!done[t.id]} onToggle={() => toggle(t.id)} />
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>

        <Reveal className="card commit">
          <div className="commit__head">
            <h3 className="card-title" style={{ margin: 0 }}>
              Meu compromisso para esta semana
            </h3>
            <span className="saved-hint">Salvo automaticamente só neste aparelho</span>
          </div>
          <NoteFields storageKey="compromisso" fields={plan.commitment} columns={3} />
        </Reveal>
      </div>
    </section>
  );
}
