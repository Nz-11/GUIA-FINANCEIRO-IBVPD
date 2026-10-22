import { AnimatePresence, motion } from 'motion/react';
import type { summarize } from '../lib/finance';
import { formatBRL } from '../lib/money';
import { AnimatedMoney } from './ui/AnimatedMoney';
import { Lock } from './ui/Icons';

type Summary = ReturnType<typeof summarize>;

const segments = [
  { key: 'essentials', label: 'Despesas essenciais', color: 'var(--chart-1)' },
  { key: 'others', label: 'Outras despesas', color: 'var(--chart-2)' },
  { key: 'installments', label: 'Parcelas das dívidas', color: 'var(--chart-3)' },
] as const;

const pct = (v: number) => `${Math.round(v * 100)}%`;

function message(s: Summary) {
  if (s.income === 0) {
    return {
      key: 'empty',
      body: (
        <>
          Preencha ao lado sua <strong>renda mensal</strong> e suas despesas. O saldo é atualizado na hora.
        </>
      ),
    };
  }
  if (s.balance < 0) {
    return {
      key: 'neg',
      body: (
        <>
          As saídas superam a renda em <strong>{formatBRL(-s.balance)}</strong>. Isso não define seu valor nem seu futuro.
          Proteja primeiro as necessidades essenciais da família, converse com os credores antes de assumir novos
          compromissos e avalie uma possibilidade realista de renda extra.
        </>
      ),
    };
  }
  if (s.balance === 0) {
    return {
      key: 'zero',
      body: (
        <>
          Sua renda está totalmente comprometida. Revise gastos possíveis de ajustar e negocie antes de assumir qualquer
          novo compromisso.
        </>
      ),
    };
  }
  return {
    key: 'pos',
    body: (
      <>
        Este é o valor estimado que sobra no mês. Defina um valor para pagamento que caiba na vida real,{' '}
        <strong>sem comprometer o essencial</strong> e sem depender de dinheiro que talvez não entre.
      </>
    ),
  };
}

export function Calculator({ summary, onClear }: { summary: Summary; onClear: () => void }) {
  const outflow = summary.essentials + summary.others + summary.installments;
  const base = Math.max(summary.income, outflow, 1);
  const msg = message(summary);
  const hasData = summary.income > 0 || outflow > 0;

  return (
    <aside className="card calc" aria-labelledby="calc-title">
      <span className="kicker" id="calc-title">
        Saldo mensal estimado
      </span>
      <p className={`calc__value${summary.balance < 0 ? ' calc__value--neg' : ''}`} aria-live="polite">
        <AnimatedMoney cents={summary.balance} />
      </p>
      <p className="calc__caption">Renda − despesas essenciais − outras despesas − parcelas</p>

      <div className="calc__bar" aria-hidden="true">
        {segments.map((seg) => (
          <motion.div
            key={seg.key}
            style={{ background: seg.color }}
            initial={false}
            animate={{ width: `${(summary[seg.key] / base) * 100}%` }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </div>

      <ul className="calc__rows">
        <li>
          <span>
            <i className="dot" style={{ background: 'var(--offwhite)' }} /> Renda mensal
          </span>
          <span>{formatBRL(summary.income)}</span>
        </li>
        {segments.map((seg) => (
          <li key={seg.key}>
            <span>
              <i className="dot" style={{ background: seg.color }} /> {seg.label}
            </span>
            <span>− {formatBRL(summary[seg.key])}</span>
          </li>
        ))}
      </ul>

      <div className="calc__divider" />

      <ul className="calc__rows">
        <li>
          <span>Total aproximado das dívidas</span>
          <span>{formatBRL(summary.debtTotal)}</span>
        </li>
        {summary.income > 0 && (
          <li>
            <span>Renda comprometida com parcelas</span>
            <span>{pct(summary.installmentShare)}</span>
          </li>
        )}
      </ul>

      <div className="calc__divider" />

      <AnimatePresence mode="wait">
        <motion.p
          key={msg.key}
          className="calc__message"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
        >
          {msg.body}
        </motion.p>
      </AnimatePresence>

      <p className="calc__privacy">
        <Lock width={16} height={16} />
        <span>
          Os cálculos acontecem só no seu navegador. Nada é enviado a servidores; os dados ficam salvos apenas neste
          aparelho.{' '}
          {hasData && (
            <button type="button" className="link-btn" onClick={onClear}>
              Apagar meus dados
            </button>
          )}
        </span>
      </p>
    </aside>
  );
}
