import "../Styles/Download.scss";
import TextReveal from "../Components/TextReveal";
import Bar from "../Components/Bar";

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

const Download = () => {
  return (
    <div className="page download">
      <TextReveal text="PREUZIMANJE" />
      <div className="page-cont">
        <section className="info">
          <Bar headline={"PODACI O FIRMI"} />
          <div className="segment">
            <h2>APR REŠENJE</h2>
            <a
              href="/files/firma/APR Rešenje.PDF"
              download="/APR Rešenje.PDF"
            ></a>
          </div>
          <div className="segment">
            <h2>POTVRDA O IZVRŠENOJ REGISTRACIJI</h2>
            <a
              href="/files/firma/Potvrda o izvršenoj registraciji.PDF"
              download="/Potvrda o izvršenoj registraciji.PDF"
            ></a>
          </div>
          <div className="segment">
            <h2>POTVRDA O IZVRŠENOM EVIDENTIRANJU PDV-a</h2>
            <a
              href="/files/firma/Potvrda o izvršenom evidentiranju pdv-a.pdf"
              download="/Potvrda o izvršenom evidentiranju pdv-a.pdf"
            ></a>
          </div>
        </section>

        <section className="brochures">
          <Bar headline={"PROSPEKTI"} />
          {brochures.map((brochure) => (
            <div className="segment" key={brochure}>
              <h2>{brochure}</h2>
              <a
                href={`/files/brosure/${brochure}.pdf`}
                download={`${brochure}.pdf`}
              ></a>
            </div>
          ))}
        </section>

        <section className="manuals">
          <Bar headline={"UPUTSTVA ZA RUKOVANJE"} />
          {manuals.map((manual) => (
            <div className="segment" key={manual}>
              <h2>{manual}</h2>
              <a
                href={`/files/brosure/${manual}.pdf`}
                download={`${manual}.pdf`}
              ></a>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Download;
