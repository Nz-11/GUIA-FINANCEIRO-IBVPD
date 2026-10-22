import { useLocalStorage } from '../../hooks/useLocalStorage';

type Props = {
  storageKey: string;
  fields: { id: string; label: string }[];
  columns?: 1 | 2 | 3;
};

/** Campos de preenchimento do guia ("Meu compromisso", "Meu primeiro passo"…), salvos só neste navegador. */
export function NoteFields({ storageKey, fields, columns = 2 }: Props) {
  const [values, setValues] = useLocalStorage<Record<string, string>>(storageKey, {});

  return (
    <div className={`fields-grid${columns > 1 ? ` fields-grid--${columns}` : ''}`}>
      {fields.map((f) => {
        const id = `${storageKey}-${f.id}`;
        return (
          <div className="field" key={f.id}>
            <label htmlFor={id}>{f.label}</label>
            <input
              id={id}
              className="input"
              value={values[f.id] ?? ''}
              onChange={(e) => setValues((v) => ({ ...v, [f.id]: e.target.value }))}
              placeholder="Escreva aqui…"
            />
          </div>
        );
      })}
    </div>
  );
}
