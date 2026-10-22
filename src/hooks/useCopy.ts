import { useCallback, useEffect, useRef, useState } from 'react';

export function useCopy(timeout = 2200) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = useCallback(
    async (text: string) => {
      let ok = false;
      try {
        await navigator.clipboard.writeText(text);
        ok = true;
      } catch {
        // Fallback para navegadores sem a API de clipboard (ou fora de HTTPS).
        const area = document.createElement('textarea');
        area.value = text;
        area.setAttribute('readonly', '');
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        try {
          ok = document.execCommand('copy');
        } catch {
          ok = false;
        }
        area.remove();
      }
      setStatus(ok ? 'copied' : 'error');
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setStatus('idle'), timeout);
    },
    [timeout],
  );

  return { status, copy };
}
