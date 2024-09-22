import "../Styles/Products.scss";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Bar from "../Components/Bar";
import { Element } from "react-scroll";
import { useParams } from "react-router-dom";
import { scroller } from "react-scroll";
import TextReveal from "../Components/TextReveal";

const Products = ({
  standardProducts,
  compactProducts,
  magnaProducts,
  sectionMotion,
}) => {
  const { section } = useParams();

  useEffect(() => {
    let elements = document.querySelectorAll(".single-product");
    VanillaTilt.init(elements, {
      max: 3,
      speed: 1000,
      scale: 1.01,
      glare: false,
    });

    return () => {
      elements.forEach((element) => {
        element.vanillaTilt.destroy();
      });
    };
  }, []);

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
    <>
      <div className="page products">
        <TextReveal text="MODELI" />

        <div className="page-cont">
          <Element name="standardni">
            <motion.section
              variants={sectionMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
            >
              <Bar headline={"STANDARDNA SERIJA"} />
              {standardProducts.map((tractor, index) => (
                <div key={index} className="single-product">
                  <Link
                    to={`/modeli/standardni/${tractor.name
                      .trim()
                      .replace(/\s+/g, "-")}`}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <img src={tractor.img} alt={tractor.name} />
                    <h1>{tractor.name}</h1>
                  </Link>
                </div>
              ))}
            </motion.section>
          </Element>

          <Element name="kompaktni">
            <motion.section
              variants={sectionMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
            >
              <Bar headline={"KOMPAKTNA SERIJA"} />
              {compactProducts.map((tractor, index) => (
                <div key={index} className="single-product">
                  <Link
                    to={`/modeli/kompaktni/${tractor.name
                      .trim()
                      .replace(/\s+/g, "-")}`}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <img src={tractor.img} alt={tractor.name} />
                    <h1>{tractor.name}</h1>
                  </Link>
                </div>
              ))}
            </motion.section>
          </Element>

          <Element name="magna">
            <motion.section
              variants={sectionMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
            >
              <Bar headline={"MAGNA SERIJA"} />
              {magnaProducts.map((tractor, index) => (
                <div key={index} className="single-product">
                  <Link
                    to={`/modeli/magna/${tractor.name
                      .trim()
                      .replace(/\s+/g, "-")}`}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <img src={tractor.img} alt={tractor.name} />
                    <h1>{tractor.name}</h1>
                  </Link>
                </div>
              ))}
            </motion.section>
          </Element>
        </div>
      </div>
    </>
  );
};

export default Products;
