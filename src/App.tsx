import { MotionConfig } from 'motion/react';
import { Closing } from './components/Closing';
import { Diagnosis } from './components/Diagnosis';
import { ExtraIncome } from './components/ExtraIncome';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Nav } from './components/Nav';
import { Negotiation } from './components/Negotiation';
import { Plan } from './components/Plan';
import { Prayer } from './components/Prayer';
import { Principles } from './components/Principles';
import { Spreadsheet } from './components/Spreadsheet';
import { Strategy } from './components/Strategy';
import { VideoGuide } from './components/VideoGuide';
import { useLocalStorage } from './hooks/useLocalStorage';
import { emptyFinance, type Finance } from './lib/finance';

export default function App() {
  const [finance, setFinance, resetFinance] = useLocalStorage<Finance>('diagnostico', emptyFinance);

  const clearFinance = () => {
    if (window.confirm('Apagar todos os valores do diagnóstico salvos neste aparelho?')) resetFinance();
  };

  return (
    // reducedMotion="user": respeita prefers-reduced-motion em todas as animações do Motion.
    <MotionConfig reducedMotion="user">
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Nav />
      <main id="conteudo">
        <Hero />
        <Intro />
        <VideoGuide />
        <Plan />
        <Spreadsheet />
        <Diagnosis finance={finance} setFinance={setFinance} onClear={clearFinance} />
        <Strategy debts={finance.debts} />
        <Negotiation />
        <ExtraIncome />
        <Principles />
        <Prayer />
        <Closing />
      </main>
    </MotionConfig>
  );
}
