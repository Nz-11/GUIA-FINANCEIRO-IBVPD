import { centsFromDigits, formatBRL } from '../../lib/money';

type Props = {
  id: string;
  label: string;
  value: number;
  onChange: (cents: number) => void;
  hint?: string;
};

/** Campo em reais: o usuário digita só números e o valor é formatado como R$ automaticamente. */
export function CurrencyInput({ id, label, value, onChange, hint }: Props) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className="input input--money"
        inputMode="numeric"
        autoComplete="off"
        value={value ? formatBRL(value) : ''}
        placeholder="R$ 0,00"
        onChange={(e) => onChange(centsFromDigits(e.target.value))}
        aria-describedby={hint ? `${id}-hint` : undefined}
      />
      {hint && (
        <span id={`${id}-hint`} className="sr-only">
          {hint}
        </span>
      )}
    </div>
  );
}
