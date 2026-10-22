import { motion, useReducedMotion } from 'motion/react';
import { ChurchLogo } from './ui/ChurchLogo';

/** Lado direito da hero: a logo da Igreja Batista Vida Plena com brilho e elementos flutuantes discretos. */
export function HeroArt() {
  const reduce = useReducedMotion();

  // `tilt: false` mantém a logo sempre na horizontal: ela só flutua, nunca gira.
  const float = (dy: number, duration: number, delay = 0, tilt = true) =>
    reduce
      ? {}
      : {
          animate: tilt ? { y: [0, dy, 0], rotate: [0, dy > 0 ? 4 : -4, 0] } : { y: [0, dy, 0] },
          transition: { duration, delay, repeat: Infinity, ease: 'easeInOut' as const },
        };

  return (
    <div className="hero__art">
      {/* Medalhão opaco: dá à logo (mix-blend-mode) um fundo sólido para o preto do arquivo se fundir */}
      <div className="hero__disc" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <motion.svg
        className="hero__ring"
        viewBox="0 0 500 500"
        aria-hidden="true"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      >
        <circle cx="250" cy="250" r="236" fill="none" stroke="#f9a825" strokeOpacity="0.45" strokeDasharray="2 8" />
        <circle cx="250" cy="250" r="196" fill="none" stroke="#f5f1e8" strokeOpacity="0.07" />
      </motion.svg>

      <motion.div className="hero__logo" {...float(-8, 9, 0, false)}>
        <ChurchLogo eager />
      </motion.div>

      {/* elementos flutuantes discretos */}
      <motion.svg className="float" viewBox="0 0 40 40" style={{ width: 28, top: '14%', right: '8%' }} aria-hidden="true" {...float(12, 8, 1)}>
        <path d="M20 2 L23 17 L38 20 L23 23 L20 38 L17 23 L2 20 L17 17Z" fill="#f9a825" />
      </motion.svg>
      <motion.svg className="float" viewBox="0 0 40 40" style={{ width: 30, bottom: '16%', left: '4%' }} aria-hidden="true" {...float(10, 9, 0.5)}>
        <circle cx="20" cy="20" r="14" fill="none" stroke="#f9a825" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="4" fill="#f9a825" />
      </motion.svg>
      <motion.svg className="float" viewBox="0 0 40 40" style={{ width: 18, top: '22%', left: '10%' }} aria-hidden="true" {...float(-10, 7, 2)}>
        <circle cx="20" cy="20" r="8" fill="#f5f1e8" opacity="0.35" />
      </motion.svg>
    </div>
  );
}
