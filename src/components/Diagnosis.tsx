import { AnimatePresence, motion } from 'motion/react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { diagnosis } from '../data/guide';
import { essentialFields, newDebt, summarize, type Debt, type Finance } from '../lib/finance';
import { formatBRL } from '../lib/money';
import { Calculator } from './Calculator';
import { CurrencyInput } from './ui/CurrencyInput';
import { Alert, Close, Plus } from './ui/Icons';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

type Props = {
  finance: Finance;
  setFinance: Dispatch<SetStateAction<Finance>>;
  onClear: () => void;
};

function Step({ n, title, hints, children, delay }: { n: number; title: string; hints: string[]; children: ReactNode; delay?: number }) {
  return (
    <Reveal className="card" delay={delay}>
      <div className="diag__step">
        <span className="diag__step-num">{n}</span>
        <h3 className="card-title" style={{ margin: 0 }}>
          {title}
        </h3>
      </div>
      <ul className="bullets diag__hints">
        {hints.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      {children}
    </Reveal>
  );
}

export function Diagnosis({ finance, setFinance, onClear }: Props) {
  const summary = summarize(finance);

  const updateDebt = (id: string, patch: Partial<Debt>) =>
    setFinance((f) => ({ ...f, debts: f.debts.map((d) => (d.id === id ? { ...d, ...patch } : d)) }));

  const removeDebt = (id: string) => setFinance((f) => ({ ...f, debts: f.debts.filter((d) => d.id !== id) }));

  const addDebt = () => setFinance((f) => ({ ...f, debts: [...f.debts, newDebt()] }));

  return (
    <section className="section" id="diagnostico" aria-labelledby="diagnostico-title">
      <div className="container">
        <SectionHeader
          eyebrow="Diagnóstico e calculadora"
          title={diagnosis.title}
          lead={diagnosis.lead}
          id="diagnostico-title"
        />

        <div className="diag">
          <div className="diag__forms">
            <Step n={1} title="Registre sua renda mensal" hints={diagnosis.incomeHints}>
              <div className="fields-grid fields-grid--2">
                <CurrencyInput
                  id="renda-fixa"
                  label="Salário, aposentadoria ou benefício"
                  value={finance.income.fixed}
                  onChange={(v) => setFinance((f) => ({ ...f, income: { ...f.income, fixed: v } }))}
                />
                <CurrencyInput
                  id="renda-variavel"
                  label="Renda variável (estimativa conservadora)"
                  value={finance.income.variable}
                  onChange={(v) => setFinance((f) => ({ ...f, income: { ...f.income, variable: v } }))}
                />
              </div>
              <div className="subtotal">
                Renda mensal <strong>{formatBRL(summary.income)}</strong>
              </div>
            </Step>

            <Step n={2} title="Registre as despesas essenciais" hints={diagnosis.essentialHints}>
              <div className="fields-grid fields-grid--2">
                {essentialFields.map((field) => (
                  <CurrencyInput
                    key={field.key}
                    id={`essencial-${field.key}`}
                    label={field.label}
                    value={finance.essentials[field.key]}
                    onChange={(v) => setFinance((f) => ({ ...f, essentials: { ...f.essentials, [field.key]: v } }))}
                  />
                ))}
              </div>
              <div className="subtotal">
                Despesas essenciais <strong>{formatBRL(summary.essentials)}</strong>
              </div>
            </Step>

            <Step
              n={3}
              title="Outras despesas"
              hints={['Gastos que não são indispensáveis, mas fazem parte do mês. Revise quais são possíveis de ajustar.']}
            >
              <CurrencyInput
                id="outras-despesas"
                label="Total de outras despesas no mês"
                value={finance.others}
                onChange={(v) => setFinance((f) => ({ ...f, others: v }))}
              />
            </Step>

            <Step n={4} title="Registre as dívidas" hints={diagnosis.debtHints}>
              <AnimatePresence initial={false}>
                {finance.debts.map((debt, i) => (
                  <motion.div
                    key={debt.id}
                    layout
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -24, transition: { duration: 0.25 } }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="debt"
                  >
                    <div className="debt__head">
                      <span className="kicker">Dívida {i + 1}</span>
                      <button
                        type="button"
                        className="icon-btn"
                        aria-label={`Remover dívida ${debt.creditor || i + 1}`}
                        onClick={() => removeDebt(debt.id)}
                      >
                        <Close width={16} height={16} />
                      </button>
                    </div>
                    <div className="debt__grid">
                      <div className="field">
                        <label htmlFor={`credor-${debt.id}`}>Banco, loja ou credor</label>
                        <input
                          id={`credor-${debt.id}`}
                          className="input"
                          value={debt.creditor}
                          placeholder="Ex.: cartão de crédito"
                          onChange={(e) => updateDebt(debt.id, { creditor: e.target.value })}
                        />
                      </div>
                      <CurrencyInput
                        id={`saldo-${debt.id}`}
                        label="Valor devido"
                        value={debt.balance}
                        onChange={(v) => updateDebt(debt.id, { balance: v })}
                      />
                      <CurrencyInput
                        id={`parcela-${debt.id}`}
                        label="Parcela atual"
                        value={debt.installment}
                        onChange={(v) => updateDebt(debt.id, { installment: v })}
                      />
                      <div className="field">
                        <label htmlFor={`juros-${debt.id}`}>Juros % a.m.</label>
                        <input
                          id={`juros-${debt.id}`}
                          className="input"
                          inputMode="decimal"
                          value={debt.rate}
                          placeholder="Se souber"
                          onChange={(e) => updateDebt(debt.id, { rate: e.target.value.replace(/[^\d,.]/g, '').slice(0, 6) })}
                        />
                      </div>
                    </div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={debt.urgent}
                        onChange={(e) => updateDebt(debt.id, { urgent: e.target.checked })}
                      />
                      <span className="switch__track" />
                      Há cobrança, processo, garantia ou risco de perder um bem essencial
                    </label>
                  </motion.div>
                ))}
              </AnimatePresence>

              <button type="button" className="add-debt" onClick={addDebt}>
                <Plus width={18} height={18} /> Adicionar dívida
              </button>

              {finance.debts.length > 0 && (
                <div className="subtotal">
                  Total aproximado das dívidas <strong>{formatBRL(summary.debtTotal)}</strong>
                </div>
              )}
            </Step>

            <Reveal className="note note--warn">
              <Alert />
              <p>
                <strong>Importante: </strong>
                {diagnosis.warning}
              </p>
            </Reveal>
          </div>

          <Calculator summary={summary} onClear={onClear} />
        </div>
      </div>
    </section>
  );
}
