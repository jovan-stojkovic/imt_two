import "../Styles/Download.scss";
import TextReveal from "../Components/TextReveal";
import Bar from "../Components/Bar";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { useParams } from "react-router-dom";
import { scroller } from "react-scroll";
import { useEffect } from "react";

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
  const { section } = useParams();

  useEffect(() => {
    if (section) {
      scroller.scrollTo(section, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -70,
      });
    }
  }, [section]);

  return (
    <div className="page download">
      <div className="reveal-div-flex">
        <TextReveal text="PREUZIMANJE" />
      </div>
      <div className="page-cont">
        <Element name="podaci-o-firmi">
          <motion.section
            className="info"
            variants={sectionMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
          >
            <Bar headline={"PODACI O FIRMI"} />
            <div className="segment about">
              <a href="/files/firma/APR Rešenje.PDF" target="_blank"></a>
              <h2>APR REŠENJE</h2>
            </div>
            <div className="segment">
              <a
                href="/files/firma/Potvrda o izvršenoj registraciji.PDF"
                target="_blank"
              ></a>
              <h2>POTVRDA O IZVRŠENOJ REGISTRACIJI</h2>
            </div>
            <div className="segment">
              <a
                href="/files/firma/Potvrda o izvršenom evidentiranju pdv-a.pdf"
                target="_blank"
              ></a>
              <h2>POTVRDA O IZVRŠENOM EVIDENTIRANJU PDV-a</h2>
            </div>
          </motion.section>
        </Element>

        <Element name="prospekti">
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
                <a href={`/files/brosure/${brochure}.pdf`} target="_blank"></a>
                <h2>{brochure}</h2>
              </div>
            ))}
          </motion.section>
        </Element>

        <Element name="uputstva">
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
                <a href={`/files/uputstva/${manual}.pdf`} target="_blank"></a>
                <h2>{manual}</h2>
              </div>
            ))}
          </motion.section>
        </Element>
      </div>
    </div>
  );
};

export default Download;
