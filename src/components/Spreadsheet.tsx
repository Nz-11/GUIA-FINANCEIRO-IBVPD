import { motion } from 'motion/react';
import { spreadsheet } from '../data/guide';
import { Download, Info, Sheet } from './ui/Icons';
import { Reveal, staggerChild, staggerParent } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

/** Download da planilha original (.xlsx), servida sem alterações a partir de public/arquivos. */
export function Spreadsheet() {
  return (
    <section className="section section--ruled" id="planilha" aria-labelledby="planilha-title">
      <div className="container">
        <SectionHeader eyebrow="Planilha" title={spreadsheet.title} lead={spreadsheet.lead} id="planilha-title" />

        <Reveal className="card sheet-card">
          <div className="sheet-card__head">
            <span className="sheet-card__icon" aria-hidden="true">
              <Sheet />
            </span>
            <div>
              <h3 className="card-title" style={{ margin: 0 }}>
                O que você encontra na planilha
              </h3>
              <p className="saved-hint">{spreadsheet.colors}</p>
            </div>
          </div>

          <motion.ol
            className="sheet-tabs"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '0px 0px -8% 0px' }}
          >
            {spreadsheet.sheets.map((sheet) => (
              <motion.li key={sheet.name} variants={staggerChild}>
                <strong>{sheet.name}</strong>
                <span>{sheet.text}</span>
              </motion.li>
            ))}
          </motion.ol>

          <div className="sheet-card__action">
            <a
              className="btn btn--download"
              href={spreadsheet.href}
              download={spreadsheet.fileName}
              type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            >
              <Download /> Baixar minha planilha
            </a>
            <span className="saved-hint">{spreadsheet.fileInfo}</span>
          </div>

          <p className="note" style={{ marginTop: 24 }}>
            <Info />
            <span>{spreadsheet.instruction}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
