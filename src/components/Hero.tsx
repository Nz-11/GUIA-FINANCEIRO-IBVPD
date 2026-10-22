import { motion } from 'motion/react';
import { hero } from '../data/guide';
import { HeroArt } from './HeroArt';
import { ArrowDown, ArrowRight } from './ui/Icons';

const ease = [0.22, 1, 0.36, 1] as const;
const item = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease },
});

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div>
          <motion.span className="eyebrow" {...item(0.1)}>
            Guia cristão e prático
          </motion.span>
          <motion.h1 className="hero__title" id="hero-title" {...item(0.2)}>
            Um Novo
            <em>Começo</em>
          </motion.h1>
          <motion.p className="hero__subtitle" {...item(0.35)}>
            {hero.subtitle}.
          </motion.p>
          <motion.p className="hero__lead" {...item(0.45)}>
            {hero.lead}
          </motion.p>
          <motion.div className="hero__actions" {...item(0.6)}>
            <a href="#plano" className="btn">
              Começar o plano de 30 dias <ArrowRight />
            </a>
            <a href="#diagnostico" className="btn btn--ghost">
              Fazer meu diagnóstico
            </a>
          </motion.div>
          <motion.blockquote className="hero__verse" {...item(0.8)}>
            <p className="verse">
              “{hero.verse.text}”
              <cite>{hero.verse.ref}</cite>
            </p>
          </motion.blockquote>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease }}
        >
          <HeroArt />
        </motion.div>
      </div>
      <a href="#guia" className="hero__scroll">
        Role para começar
        <span />
        <ArrowDown width={14} height={14} />
      </a>
    </section>
  );
}
