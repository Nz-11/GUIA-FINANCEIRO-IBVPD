import { AnimatePresence, motion } from 'motion/react';
import { negotiation } from '../data/guide';
import { useCopy } from '../hooks/useCopy';
import { Alert, Check, Copy, Info, Lock } from './ui/Icons';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

const cautionIcons = [Alert, Info, Lock];

export function Negotiation() {
  const { status, copy } = useCopy();

  return (
    <section className="section" id="negociacao" aria-labelledby="negociacao-title">
      <div className="container">
        <SectionHeader eyebrow="Negociação" title={negotiation.title} lead={negotiation.lead} id="negociacao-title" />

        <div className="grid-2">
          <Reveal>
            <h3 className="card-title">Antes de aceitar um acordo, pergunte</h3>
            <ol className="questions">
              {negotiation.questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="card script" delay={0.1}>
            <span className="script__quote" aria-hidden="true">
              “
            </span>
            <span className="kicker">Roteiro copiável</span>
            <h3 className="card-title" style={{ marginTop: 8 }}>
              Roteiro para falar com o banco
            </h3>
            <blockquote>“{negotiation.script}”</blockquote>
            <button type="button" className="btn btn--primary" onClick={() => copy(negotiation.script)}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={status}
                  className="copy-status"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  {status === 'copied' ? (
                    <>
                      <Check /> Roteiro copiado
                    </>
                  ) : status === 'error' ? (
                    <>Não foi possível copiar — selecione o texto</>
                  ) : (
                    <>
                      <Copy /> Copiar roteiro
                    </>
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
            <span className="sr-only" aria-live="polite">
              {status === 'copied' ? 'Roteiro copiado para a área de transferência.' : ''}
            </span>
          </Reveal>
        </div>

        <div className="cautions">
          {negotiation.cautions.map((c, i) => {
            const Icon = cautionIcons[i];
            return (
              <Reveal key={c} className={`note${i === 0 ? ' note--warn' : ''}`} delay={i * 0.08}>
                <Icon />
                <p>{c}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
