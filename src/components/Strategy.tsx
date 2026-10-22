import { AnimatePresence, LayoutGroup, motion } from 'motion/react';
import { useState } from 'react';
import { strategy } from '../data/guide';
import { avalancheOrder, parseRate, snowballOrder, type Debt } from '../lib/finance';
import { formatBRL } from '../lib/money';
import { Alert, Info } from './ui/Icons';
import { NoteFields } from './ui/NoteFields';
import { Reveal, staggerChild, staggerParent } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

type Method = 'snowball' | 'avalanche';

function SnowballArt() {
  return (
    <svg className="method__illus" viewBox="0 0 200 90" aria-hidden="true">
      {[10, 16, 24, 34].map((r, i) => (
        <motion.circle
          key={r}
          cy={80 - r}
          r={r}
          fill={i === 3 ? 'var(--orange)' : 'var(--graphite-3)'}
          initial={{ cx: 10, opacity: 0 }}
          animate={{ cx: [18, 52, 100, 162][i], opacity: 1 }}
          transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
      <line x1="0" y1="80.5" x2="200" y2="80.5" stroke="var(--line-strong)" />
    </svg>
  );
}

function AvalancheArt() {
  return (
    <svg className="method__illus" viewBox="0 0 200 90" aria-hidden="true">
      {[70, 52, 36, 22].map((h, i) => (
        <motion.rect
          key={h}
          x={14 + i * 46}
          width="30"
          rx="6"
          fill={i === 0 ? 'var(--orange)' : 'var(--graphite-3)'}
          initial={{ height: 0, y: 80 }}
          animate={{ height: h, y: 80 - h }}
          transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
      <line x1="0" y1="80.5" x2="200" y2="80.5" stroke="var(--line-strong)" />
    </svg>
  );
}

function DebtOrder({ debts, method }: { debts: Debt[]; method: Method }) {
  const ordered = method === 'snowball' ? snowballOrder(debts) : avalancheOrder(debts);

  if (ordered.length === 0) {
    return (
      <div className="empty">
        <p>Registre suas dívidas no diagnóstico para ver aqui a ordem sugerida por este método.</p>
        <a href="#diagnostico" className="btn btn--ghost btn--small">
          Ir para o diagnóstico
        </a>
      </div>
    );
  }

  return (
    <>
      <p className="kicker" style={{ marginBottom: 14 }}>
        Ordem sugerida para direcionar o dinheiro extra
      </p>
      <ol className="order">
        {ordered.map((d, i) => {
          const rate = parseRate(d.rate);
          return (
            <motion.li key={d.id} layout transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
              <span className="order__pos">{i + 1}</span>
              <span className="order__name">
                {d.creditor || 'Dívida sem nome'}
                <span className="order__meta">
                  {rate !== null ? `Juros: ${d.rate}% a.m.` : 'Juros não informados'}
                  {d.installment > 0 && ` · Parcela ${formatBRL(d.installment)}`}
                </span>
                {d.urgent && <span className="tag">Risco: procure orientação</span>}
              </span>
              <span className="order__value">{formatBRL(d.balance)}</span>
            </motion.li>
          );
        })}
      </ol>
      {method === 'avalanche' && ordered.some((d) => parseRate(d.rate) === null) && (
        <p className="saved-hint" style={{ marginTop: 12 }}>
          Dívidas sem taxa informada aparecem no fim da lista.
        </p>
      )}
    </>
  );
}

export function Strategy({ debts }: { debts: Debt[] }) {
  const [method, setMethod] = useState<Method>('snowball');
  const hasUrgent = debts.some((d) => d.urgent);

  return (
    <section className="section section--alt" id="estrategia" aria-labelledby="estrategia-title">
      <div className="container">
        <SectionHeader eyebrow="Estratégia" title={strategy.title} lead={strategy.lead} id="estrategia-title" />

        <Reveal>
          <h3 className="card-title" style={{ marginBottom: 20 }}>
            Primeiro, organize as prioridades
          </h3>
        </Reveal>
        <motion.ol
          className="priorities"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        >
          {strategy.priorities.map((p) => (
            <motion.li key={p} variants={staggerChild}>
              {p}
            </motion.li>
          ))}
        </motion.ol>

        <Reveal className="methods">
          <h3 className="card-title" style={{ marginBottom: 20 }}>
            Duas formas comuns de priorizar dívidas
          </h3>
          <LayoutGroup id="method-tabs">
            <div className="tabs" role="tablist" aria-label="Método de priorização">
              {(['snowball', 'avalanche'] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  role="tab"
                  id={`tab-${m}`}
                  aria-selected={method === m}
                  aria-controls="method-panel"
                  className="tab"
                  onClick={() => setMethod(m)}
                >
                  {method === m && (
                    <motion.span className="tab__pill" layoutId="tab-pill" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                  )}
                  <span>{m === 'snowball' ? 'Bola de neve' : 'Juros mais altos'}</span>
                </button>
              ))}
            </div>
          </LayoutGroup>

          <div className="method" id="method-panel" role="tabpanel" aria-labelledby={`tab-${method}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={method}
                className="card"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {method === 'snowball' ? <SnowballArt /> : <AvalancheArt />}
                <h4 className="card-title">{strategy.methods[method].name}</h4>
                <p className="text-soft">{strategy.methods[method].text}</p>
              </motion.div>
            </AnimatePresence>
            <div className="card">
              <DebtOrder debts={debts} method={method} />
            </div>
          </div>

          <div className={`note${hasUrgent ? ' note--warn' : ''}`} style={{ marginTop: 24 }}>
            {hasUrgent ? <Alert /> : <Info />}
            <p>{strategy.caution}</p>
          </div>
        </Reveal>

        <Reveal className="card mt-lg">
          <div className="commit__head">
            <h3 className="card-title" style={{ margin: 0 }}>
              Meu primeiro passo
            </h3>
            <span className="saved-hint">Salvo automaticamente só neste aparelho</span>
          </div>
          <NoteFields storageKey="primeiro-passo" fields={strategy.firstStep} />
          <p className="note" style={{ marginTop: 24 }}>
            <span>
              <strong>Lembre-se: </strong>
              {strategy.remember}
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
