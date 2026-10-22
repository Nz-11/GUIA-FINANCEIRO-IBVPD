import { motion } from 'motion/react';

type Props = {
  id: string;
  label: string;
  checked: boolean;
  onToggle: () => void;
};

export function TaskItem({ id, label, checked, onToggle }: Props) {
  return (
    <li>
      <label className={`task${checked ? ' task--checked' : ''}`} htmlFor={id}>
        <input id={id} type="checkbox" checked={checked} onChange={onToggle} />
        <motion.span className="task__box" animate={{ scale: checked ? [1, 1.18, 1] : 1 }} transition={{ duration: 0.35 }}>
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <motion.path
              d="M3.5 8.5l3 3 6-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={false}
              animate={{ pathLength: checked ? 1 : 0, opacity: checked ? 1 : 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            />
          </svg>
        </motion.span>
        <span className="task__label">
          {label}
          <motion.span
            className="task__strike"
            aria-hidden="true"
            initial={false}
            animate={{ scaleX: checked ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </span>
      </label>
    </li>
  );
}
