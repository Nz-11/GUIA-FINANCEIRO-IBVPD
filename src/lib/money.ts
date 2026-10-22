const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

/** Valores são guardados em centavos (inteiros) para evitar erros de ponto flutuante. */
export const formatBRL = (cents: number) => brl.format(cents / 100);

export const centsFromDigits = (input: string) => {
  const digits = input.replace(/\D/g, '').slice(0, 13);
  return digits ? parseInt(digits, 10) : 0;
};

export const sum = (values: number[]) => values.reduce((a, b) => a + b, 0);
