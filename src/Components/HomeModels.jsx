import { useEffect } from "react";
import Bar from "./Bar";

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
          <div className="part">
            <div className="model-img"></div>
            <p className="series-name">Standardna Serija</p>
          </div>
          <div className="part">
            <div className="model-img"></div>
            <p className="series-name">Kompaktna Serija</p>
          </div>
          <div className="part">
            <div className="model-img"></div>
            <p className="series-name">Magna Serija</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeModels;
