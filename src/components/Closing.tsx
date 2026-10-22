import { closing } from '../data/guide';
import { ChurchLogo } from './ui/ChurchLogo';
import { ArrowRight, Printer } from './ui/Icons';
import { Reveal } from './ui/Reveal';

export function Closing() {
  return (
    <section className="section closing" id="recomecar" aria-labelledby="recomecar-title">
      <div className="closing__glow" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <h2 className="closing__title" id="recomecar-title">
            Você pode <em>recomeçar</em>
          </h2>
        </Reveal>

        <div className="closing__body">
          {closing.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p>{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.25}>
            <p className="closing__wish">{closing.wish}</p>
          </Reveal>
        </div>

        <Reveal className="closing__actions" delay={0.3}>
          <a href="#plano" className="btn btn--primary">
            Dar o próximo passo <ArrowRight />
          </a>
          <button type="button" className="btn btn--ghost" onClick={() => window.print()}>
            <Printer /> Imprimir meu plano
          </button>
        </Reveal>

        <footer className="footer">
          <div className="footer__brand">
            <ChurchLogo />
            <a href="#inicio" className="brand">
              Um Novo Começo
            </a>
          </div>
          <p>{closing.signature}</p>
        </footer>
      </div>
    </section>
  );
}
