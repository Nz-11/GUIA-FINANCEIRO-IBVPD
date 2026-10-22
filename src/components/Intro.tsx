import { intro } from '../data/guide';
import { Info } from './ui/Icons';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

export function Intro() {
  return (
    <section className="section" id="guia" aria-labelledby="guia-title">
      <div className="container">
        <SectionHeader eyebrow="Apresentação" title={intro.title} id="guia-title" />

        <div className="grid-2">
          <Reveal className="intro__body">
            {intro.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? 'intro__drop' : undefined}>
                {p}
              </p>
            ))}
          </Reveal>

          <div className="intro__aside">
            <Reveal className="card card--lift" delay={0.1}>
              <span className="kicker">Como usar este guia</span>
              <p className="text-soft" style={{ marginTop: 12 }}>{intro.howTo}</p>
            </Reveal>
            <Reveal className="note" delay={0.2}>
              <Info />
              <p>
                <strong>Se você estiver ajudando alguém: </strong>
                {intro.helper}
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal className="truth">
          <div>
            <span className="eyebrow">
              O primeiro passo
            </span>
            <h3>{intro.truth.title}</h3>
            <p>{intro.truth.text}</p>
          </div>
          <div>
            <blockquote style={{ margin: 0 }}>
              <p className="verse">
                “{intro.truth.verse.text}”<cite>{intro.truth.verse.ref}</cite>
              </p>
            </blockquote>
            <div className="truth__prayer">
              <small>Faça esta oração, se fizer sentido para você:</small>“{intro.truth.prayer}”
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
