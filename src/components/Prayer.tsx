import { motion } from 'motion/react';
import { prayer } from '../data/guide';
import { useCopy } from '../hooks/useCopy';
import { Check, Copy } from './ui/Icons';
import { Reveal } from './ui/Reveal';

const fullText = `“${prayer.lines.join(' ')} ${prayer.amen}”`;

export function Prayer() {
  const { status, copy } = useCopy();

  return (
    <section className="section prayer" id="oracao" aria-labelledby="oracao-title">
      <div className="container">
        <Reveal>
          <svg className="prayer__ornament" viewBox="0 0 120 24" fill="none" aria-hidden="true">
            <path d="M0 12h44M76 12h44" stroke="currentColor" />
            <path d="M60 2c4 6 4 14 0 20-4-6-4-14 0-20z" fill="currentColor" />
            <circle cx="50" cy="12" r="2" fill="currentColor" />
            <circle cx="70" cy="12" r="2" fill="currentColor" />
          </svg>
          <span className="eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>
            Oração
          </span>
          <h2 className="section-title" id="oracao-title" style={{ marginBottom: 48 }}>
            {prayer.title}
          </h2>
        </Reveal>

        <blockquote className="prayer__text" style={{ marginBlock: 0 }}>
          {prayer.lines.map((line, i) => (
            <motion.p
              key={i}
              className="prayer__line"
              initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 1.1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {i === 0 && '“'}
              {line}
            </motion.p>
          ))}
          <Reveal className="prayer__amen" delay={0.3}>
            {prayer.amen}”
          </Reveal>
        </blockquote>

        <div className="prayer__actions">
          <button type="button" className="btn btn--ghost" onClick={() => copy(fullText)}>
            {status === 'copied' ? (
              <>
                <Check /> Oração copiada
              </>
            ) : (
              <>
                <Copy /> Copiar oração
              </>
            )}
          </button>
          <span className="sr-only" aria-live="polite">
            {status === 'copied' ? 'Oração copiada.' : ''}
          </span>
        </div>
      </div>
    </section>
  );
}
