import "../Styles/Products.scss";
import { motion, useInView } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  useEffect(() => {
    let elements = document.querySelectorAll(".single-product");
    VanillaTilt.init(elements, {
      max: 5,
      speed: 1000,
      scale: 1.02,
      glare: true,
    });

    return () => {
      elements.forEach((element) => {
        element.vanillaTilt.destroy();
      });
    };
  }, []);

  const imgMotion = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  const containerMotion = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const productMotion = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 120,
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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <>
      <div className="page products">
        <motion.div
          className="top-img-cont"
          variants={imgMotion}
          initial="hidden"
          animate="visible"
        ></motion.div>
        <div className="page-cont">
          <h1>Modeli</h1>
          <motion.div
            className="products-grid"
            ref={ref}
            variants={containerMotion}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {productsObj.map((product, index) => (
              <motion.div
                key={index}
                className="single-product"
                variants={productMotion}
              >
                <Link
                  to={`/modeli/${product.name}`}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <img src={product.img} alt="tractor-image" />
                  <h3>{`IMT ${product.name}`}</h3>
                  <p className="hp">{`${product.hp}hp`}</p>
                  <p className="wd">{`${product.wd}WD`}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Products;
