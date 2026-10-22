import { motion } from 'motion/react';
import { principles } from '../data/guide';
import { Reveal, staggerChild, staggerParent } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

export function Principles() {
  return (
    <section className="section section--dark" id="principios" aria-labelledby="principios-title">
      <div className="container">
        <SectionHeader
          eyebrow="Fé e vida financeira"
          title={principles.title}
          lead={principles.lead}
          id="principios-title"
          center
        />

        <motion.div
          className="principles"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        >
          {principles.items.map((p) => (
            <motion.article key={p.title} className="principle" variants={staggerChild}>
              <span className="principle__ref">{p.ref}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <p className="principle__practice">
                <b>Aplicação prática</b>
                {p.practice}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <Reveal className="truth-banner">
          <b>Uma verdade para guardar:</b> {principles.truth}
        </Reveal>
      </div>
    </section>
  );
}
