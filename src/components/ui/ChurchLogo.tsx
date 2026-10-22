/**
 * Logo original da Igreja Batista Vida Plena (public/images/logo-vida-plena.png, versão para fundo escuro).
 * A imagem não é alterada: o fundo preto do arquivo se funde ao fundo escuro do site via mix-blend-mode,
 * e a proporção é preservada (altura definida no CSS, largura automática).
 */
type Props = { className?: string; eager?: boolean };

export function ChurchLogo({ className = '', eager = false }: Props) {
  return (
    <img
      className={`church-logo ${className}`.trim()}
      src="/images/logo-vida-plena.png"
      alt="Igreja Batista Vida Plena"
      width={2170}
      height={725}
      decoding="async"
      loading={eager ? 'eager' : 'lazy'}
    />
  );
}
