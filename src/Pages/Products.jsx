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

const Products = ({ tractors, sectionMotion }) => {
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

  const standard = [
    {
      name: "IMT 539.2 kabina ",
      img: "/products/IMT 539.2 DI 2WD kabina.png",
      hp: 47,
      wd: 2,
    },
    {
      name: "IMT 539.2 ROPS ",
      img: "/products/IMT 539.2 DI 2WD ROPS.png",
      hp: 47,
      wd: 2,
    },
    {
      name: "IMT 549.3 kabina ",
      img: "/products/IMT 549.3 DI 4WD kabina.png",
      hp: 47,
      wd: 4,
    },
    {
      name: "IMT 549.3 ROPS ",
      img: "/products/IMT 549.3 DI 4WD ROPS.png",
      hp: 47,
      wd: 4,
    },
    {
      name: "IMT 565.2 kabina",
      img: "/products/IMT 565.2 DI 4WD kabina.png",
      hp: 63,
      wd: 4,
    },
    {
      name: "IMT 565.2 ROPS",
      img: "/products/IMT 565.2 DI 4WD ROPS.png",
      hp: 63,
      wd: 4,
    },
    {
      name: "TAFE 4615 ROPS",
      img: "/products/TAFE 4615 4WD ROPS.png",
      hp: 47,
      wd: 4,
    },
    {
      name: "TAFE 6515 ROPS",
      img: "/products/TAFE 6515 4WD ROPS.png",
      hp: 65,
      wd: 4,
    },
  ];

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
              {tractors.map((product, index) => (
                <div key={index} className="single-product">
                  <Link
                    to={`/modeli/standardni/${product.name.trim().replace(/\s+/g, '-')}`}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <img src={product.img} alt={product.name} />
                    <h1>{product.name}</h1>
                    <p className="hp">{product.Snaga}</p>
                    <p className="wd">{product.Pogon}</p>
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
            </motion.section>
          </Element>
        </div>
      </div>
    </>
  );
};

export default Products;
