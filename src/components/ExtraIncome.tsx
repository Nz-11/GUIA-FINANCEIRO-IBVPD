import { motion } from 'motion/react';
import { extraIncome } from '../data/guide';
import { Alert, IdeaGlyph } from './ui/Icons';
import { NoteFields } from './ui/NoteFields';
import { Reveal, staggerChild, staggerParent } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

export function ExtraIncome() {
  return (
    <section className="section section--alt" id="renda-extra" aria-labelledby="renda-title">
      <div className="container">
        <SectionHeader eyebrow="Renda extra" title={extraIncome.title} lead={extraIncome.lead} id="renda-title" />

        <div className="income-top">
          <Reveal className="card">
            <h3 className="card-title">Pergunte a si mesmo</h3>
            <ul className="bullets">
              {extraIncome.questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="note note--warn" delay={0.1} style={{ alignSelf: 'start' }}>
            <Alert />
            <p>
              <strong>Atenção: </strong>
              {extraIncome.warning}
            </p>
          </Reveal>
        </div>

        <Reveal>
          <h3 className="card-title" style={{ marginBottom: 6 }}>
            Algumas ideias para avaliar
          </h3>
          <p className="text-soft" style={{ marginBottom: 28 }}>{extraIncome.tip}</p>
        </Reveal>

        <motion.div
          className="ideas"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -8% 0px' }}
        >
          {extraIncome.ideas.map((idea) => (
            <motion.article key={idea.title} className="card card--lift idea" variants={staggerChild}>
              <div className="idea__icon">
                <IdeaGlyph name={idea.icon} />
              </div>
              <h3>{idea.title}</h3>
              <p>{idea.text}</p>
            </motion.article>
          ))}
        </motion.div>

        <Reveal className="card mt-lg">
          <div className="commit__head">
            <h3 className="card-title" style={{ margin: 0 }}>
              Registre sua ideia
            </h3>
            <span className="saved-hint">Salvo automaticamente só neste aparelho</span>
          </div>
          <NoteFields storageKey="ideia-renda" fields={extraIncome.record} />
        </Reveal>
      </div>
    </section>
  );
}
