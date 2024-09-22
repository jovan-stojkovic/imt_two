import "../Styles/Download.scss";
import TextReveal from "../Components/TextReveal";
import Bar from "../Components/Bar";
import { motion } from "framer-motion";

const brochures = [
  "IMT 539.2",
  "IMT 549.3",
  "IMT 565.2",
  "IMT 569 M",
  "IMT 577 M",
  "IMT 587 M",
  "TAFE 4615",
  "TAFE 6028 M",
  "TAFE 6515",
];

const manuals = [
  "IMT 539.2, 539.3",
  "IMT 549.3",
  "IMT 565",
  "IMT 569M, 577M, 587M",
  "TAFE 4615",
  "TAFE 6028M",
  "TAFE 6515",
];

const Download = ({ sectionMotion }) => {
  return (
    <div className="page download">
      <TextReveal text="PREUZIMANJE" />
      <div className="page-cont">
        <motion.section
          className="info"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <Bar headline={"PODACI O FIRMI"} />
          <div className="segment about">
            <h2>APR REŠENJE</h2>
            <a href="/files/firma/APR Rešenje.PDF" download="/APR Rešenje.PDF">
              <img src="/logos/bg-bw.jpg" alt="logo" />
            </a>
          </div>
          <div className="segment">
            <h2>POTVRDA O IZVRŠENOJ REGISTRACIJI</h2>
            <a
              href="/files/firma/Potvrda o izvršenoj registraciji.PDF"
              download="/Potvrda o izvršenoj registraciji.PDF"
            >
              <img src="/logos/bg-bw.jpg" alt="logo" />
            </a>
          </div>
          <div className="segment">
            <h2>POTVRDA O IZVRŠENOM EVIDENTIRANJU PDV-a</h2>
            <a
              href="/files/firma/Potvrda o izvršenom evidentiranju pdv-a.pdf"
              download="/Potvrda o izvršenom evidentiranju pdv-a.pdf"
            >
              <img src="/logos/bg-bw.jpg" alt="logo" />
            </a>
          </div>
        </motion.section>

        <motion.section
          className="brochures"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <Bar headline={"PROSPEKTI"} />
          {brochures.map((brochure) => (
            <div className="segment" key={brochure}>
              <h2>{brochure}</h2>
              <a
                href={`/files/brosure/${brochure}.pdf`}
                download={`${brochure}.pdf`}
              >
                <img src="/icons/tractor2.svg" alt="tr" />
              </a>
            </div>
          ))}
        </motion.section>

        <motion.section
          className="manuals"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <Bar headline={"UPUTSTVA ZA RUKOVANJE"} />
          {manuals.map((manual) => (
            <div className="segment" key={manual}>
              <h2>{manual}</h2>
              <a
                href={`/files/brosure/${manual}.pdf`}
                download={`${manual}.pdf`}
              >
                <img src="/icons/book.svg" alt="manual" />
              </a>
            </div>
          ))}
        </motion.section>
      </div>
    </div>
  );
};

export default Download;
