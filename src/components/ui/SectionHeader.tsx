import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type Props = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  id?: string;
};

export function SectionHeader({ eyebrow, title, lead, center, id }: Props) {
  return (
    <Reveal className={`section-head${center ? ' section-head--center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      {lead && <p className="section-lead">{lead}</p>}
    </Reveal>
  );
}
