import { video } from '../data/guide';
import { Reveal } from './ui/Reveal';

/** Vídeo narrado do guia. Arquivo vertical (9:16): o player usa a proporção real, sem faixas pretas. */
export function VideoGuide() {
  return (
    <section className="section section--ruled" id="video" aria-labelledby="video-title">
      <div className="container">
        <Reveal className="card media-card">
          <div className="media-card__text">
            <span className="eyebrow">Vídeo · {video.duration}</span>
            <h2 className="section-title" id="video-title">
              {video.title}
            </h2>
            <p className="section-lead">{video.lead}</p>
            <a href="#plano" className="btn btn--ghost media-card__cta">
              Ir para o plano de 30 dias
            </a>
          </div>

          <div className="video-frame">
            {/* Sem autoplay: o visitante decide quando assistir. preload="metadata" evita baixar o vídeo inteiro antes. */}
            <video
              className="video"
              controls
              preload="metadata"
              playsInline
              poster={video.poster}
              width={1080}
              height={1920}
              aria-label={video.title}
            >
              <source src={video.src} type="video/mp4" />
              <p>
                Seu navegador não consegue reproduzir este vídeo. <a href={video.src}>Abra o arquivo do vídeo</a>.
              </p>
            </video>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
