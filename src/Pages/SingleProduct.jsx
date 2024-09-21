import { useParams } from "react-router-dom";
import TextReveal from "../Components/TextReveal";
import Bar from "../Components/Bar";
import Form from "../Components/Form";
import "../Styles/SingleProduct.scss";

const SingleProduct = ({ tractors }) => {
  const { tractorName } = useParams();

  const selectedTractor = tractors.find(
    (tractor) => tractor.name.trim().replace(/\s+/g, "-") === tractorName
  );

  if (!selectedTractor) {
    return <h1>Traktor nije pronađen!</h1>;
  }

  return (
    <div className="page single-product">
      <TextReveal text={selectedTractor.name} />
      <div className="page-cont">
        <section>
          <Bar headline={"SPECIFIKACIJE"} />
          <div className="product-left">
            <img src={selectedTractor.img} alt={selectedTractor.name} />
            <Form title={selectedTractor.name} />
          </div>
          <div className="product-right">
            <p>
              Snaga motora: <span>{selectedTractor.Snaga}</span>{" "}
            </p>
            <p>
              Pogon: <span>{selectedTractor.Pogon}</span>{" "}
            </p>
            <p>
              Auspuh: <span>{selectedTractor.Auspuh}</span>{" "}
            </p>
            <p>
              Filter vazduha: <span>{selectedTractor.Filter}</span>{" "}
            </p>
            <p>
              Kvačilo: <span>{selectedTractor.Kvacilo}</span>{" "}
            </p>
            <p>
              Menjač i tip: <span>{selectedTractor.Menjac}</span>{" "}
            </p>
            <p>
              PTO: <span>{selectedTractor.PTO}</span>{" "}
            </p>
            <p>
              Zadnja osovina: <span>{selectedTractor.ZadnjaOsovina}</span>{" "}
            </p>
            <p>
              Hidraulika: <span>{selectedTractor.Hidraulika}</span>{" "}
            </p>
            <p>
              Kapacitet podizanja (kgf):{" "}
              <span>{selectedTractor.KapacitetPodizanja}</span>{" "}
            </p>
            <p>
              Upravljanje: <span>{selectedTractor.Upravljanje}</span>{" "}
            </p>
            <p>
              Prednje gume: <span>{selectedTractor.PrednjeGume}</span>{" "}
            </p>
            <p>
              Zadnje gume: <span>{selectedTractor.ZadnjeGume}</span>{" "}
            </p>
            <p>
              Kočnice: <span>{selectedTractor.Kocnice}</span>{" "}
            </p>
            <p>
              ROPS: <span>{selectedTractor.ROPS}</span>{" "}
            </p>
            <p>
              Klateća poteznica: <span>{selectedTractor.KlatecaPoteznica}</span>{" "}
            </p>
            <p>
              Prednji tegovi: <span>{selectedTractor.PrednjiTegovi}</span>{" "}
            </p>
            <p>
              Zadnji tegovi: <span>{selectedTractor.ZadnjiTegovi}</span>{" "}
            </p>
            <p>
              Cev za kipovanje: <span>{selectedTractor.CevZaKipovanje}</span>{" "}
            </p>
            <p>
              Razvodni ventil: <span>{selectedTractor.RazvodniVentil}</span>{" "}
            </p>
            <p>
              Kompresor: <span>{selectedTractor.Kompresor}</span>{" "}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SingleProduct;