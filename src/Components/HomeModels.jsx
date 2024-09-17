import { useEffect } from "react";
import Bar from "./Bar";
import { Link } from "react-router-dom";

const HomeModels = () => {
  useEffect(() => {
    let elements = document.querySelectorAll(".model-img");
    VanillaTilt.init(elements, {
      max: 10,
      speed: 1000,
      scale: 1.05,
      glare: false,
    });

    return () => {
      elements.forEach((element) => {
        element.vanillaTilt.destroy();
      });
    };
  }, []);

  return (
    <>
      <div className="home-models">
        <Bar headline={"MODELI"} />
        <div className="models">
          <Link className="part" to="/modeli/standardni">
            <div className="model-img"></div>
            <p className="series-name">Standardna Serija</p>
          </Link>
          <Link className="part" to="/modeli/kompaktni">
            <div className="model-img"></div>
            <p className="series-name">Kompaktna Serija</p>
          </Link>
          <Link className="part" to="/modeli/magna">
            <div className="model-img"></div>
            <p className="series-name">Magna Serija</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeModels;
