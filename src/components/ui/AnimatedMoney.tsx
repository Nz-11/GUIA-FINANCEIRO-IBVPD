import { animate, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { formatBRL } from '../../lib/money';

/** Exibe um valor em R$ que "conta" suavemente até o novo número. */
export function AnimatedMoney({ cents }: { cents: number }) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(cents);
  const from = useRef(cents);

  useEffect(() => {
    if (reduce) {
      setDisplay(cents);
      from.current = cents;
      return;
    }
    const controls = animate(from.current, cents, {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        from.current = v;
        setDisplay(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [cents, reduce]);

  return <>{formatBRL(display)}</>;
}
