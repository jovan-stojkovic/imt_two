import "../Styles/Products.scss";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Bar from "../Components/Bar";
import { Element } from "react-scroll";
import { useParams } from "react-router-dom";
import { scroller } from "react-scroll";

const Products = () => {
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

  const sectionMotion = {
    hidden: {
      opacity: 0,
      x: -300,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1,
        duration: 0.3,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  const productsObj = [
    { name: "539.2 DI", img: "/products/IMT-539.2-DI.webp", hp: 47, wd: 2 },
    { name: "539.3 DI", img: "/products/IMT-539.3-DI.webp", hp: 47, wd: 2 },
    { name: "549.3 DI", img: "/products/IMT-549.3-DI.webp", hp: 47, wd: 4 },
    { name: "549M OS", img: "/products/IMT-549M-OS.webp", hp: 47, wd: 4 },
    { name: "565.2 DI", img: "/products/IMT-565.2-DI.webp", hp: 63, wd: 4 },
    {
      name: "577M HVAC",
      img: "/products/IMT-577M-HVAC.webp",
      hp: 75,
      wd: 4,
    },
    {
      name: "587M HVAC",
      img: "/products/IMT-587M-HVAC.webp",
      hp: 80,
      wd: 4,
    },
  ];

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
        <h1 className="main-headline">MODELI</h1>

        <div className="page-cont">
          <Element name="standardni">
            <motion.section
              variants={sectionMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
            >
              <Bar headline={"STANDARDNA SERIJA"} />
              {standard.map((product, index) => (
                <div key={index} className="single-product">
                  <Link
                    to={`/modeli/${product.name}`}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <img src={product.img} alt={product.name} />
                    <h1>{product.name}</h1>
                    <p className="hp">{`${product.hp}hp`}</p>
                    <p className="wd">{`${product.wd}WD`}</p>
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
