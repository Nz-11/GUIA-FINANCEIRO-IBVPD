import { sum } from './money';

export type Debt = {
  id: string;
  creditor: string;
  /** Valor aproximado devido, em centavos. */
  balance: number;
  /** Parcela atual, em centavos. */
  installment: number;
  /** Taxa de juros ao mês (%), como texto digitado — pode ficar vazia. */
  rate: string;
  /** Há cobrança, processo, garantia ou risco de perder um bem essencial. */
  urgent: boolean;
};

export type Finance = {
  income: { fixed: number; variable: number };
  essentials: Record<EssentialKey, number>;
  others: number;
  debts: Debt[];
};

export const essentialFields = [
  { key: 'moradia', label: 'Moradia (aluguel, financiamento, condomínio)' },
  { key: 'contas', label: 'Água, luz e gás' },
  { key: 'alimentacao', label: 'Alimentação' },
  { key: 'transporte', label: 'Transporte para trabalhar' },
  { key: 'saude', label: 'Saúde' },
  { key: 'familia', label: 'Crianças e outras despesas indispensáveis' },
] as const;

export type EssentialKey = (typeof essentialFields)[number]['key'];

export const emptyFinance: Finance = {
  income: { fixed: 0, variable: 0 },
  essentials: { moradia: 0, contas: 0, alimentacao: 0, transporte: 0, saude: 0, familia: 0 },
  others: 0,
  debts: [],
};

export const newDebt = (): Debt => ({
  id: Math.random().toString(36).slice(2, 10),
  creditor: '',
  balance: 0,
  installment: 0,
  rate: '',
  urgent: false,
});

export const parseRate = (rate: string) => {
  const n = parseFloat(rate.replace(',', '.'));
  return Number.isFinite(n) && n >= 0 ? n : null;
};

export function summarize(f: Finance) {
  const income = f.income.fixed + f.income.variable;
  const essentials = sum(Object.values(f.essentials));
  const installments = sum(f.debts.map((d) => d.installment));
  const debtTotal = sum(f.debts.map((d) => d.balance));
  const balance = income - essentials - f.others - installments;
  const share = (v: number) => (income > 0 ? v / income : 0);

  return {
    income,
    essentials,
    others: f.others,
    installments,
    debtTotal,
    balance,
    installmentShare: share(installments),
    essentialsShare: share(essentials),
  };
}

/** Bola de neve: menor dívida primeiro. */
export const snowballOrder = (debts: Debt[]) =>
  [...debts].filter((d) => d.balance > 0).sort((a, b) => a.balance - b.balance);

/** Juros mais altos primeiro; dívidas sem taxa informada vão para o fim. */
export const avalancheOrder = (debts: Debt[]) =>
  [...debts]
    .filter((d) => d.balance > 0)
    .sort((a, b) => (parseRate(b.rate) ?? -1) - (parseRate(a.rate) ?? -1) || a.balance - b.balance);
