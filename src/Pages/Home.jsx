import "../Styles/Home.scss";
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import TopImage from "../Components/TopImage";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const [productsCount, setProductsCount] = useState(0);

  const productsRef = useRef(null);
  const isProductsInView = useInView(productsRef, { once: true, amount: 1 });

  useEffect(() => {
    if (isProductsInView) {
      let productsStart = 0;
      const productsEnd = 700;
      const productsDuration = 2000;
      const productsIncrementTime = Math.floor(productsDuration / productsEnd);

      const productsTimer = setInterval(() => {
        productsStart += 1;
        setProductsCount(productsStart);
        if (productsStart === productsEnd) {
          clearInterval(productsTimer);
        }
      }, productsIncrementTime);

      return () => clearInterval(productsTimer);
    }
  }, [isProductsInView]);

  const sectionMotion = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4,
        duration: 0.2,
        type: "spring",
        stiffness: 120,
      },
    },
  };

  return (
    <div className="page home">
      <TopImage />
      <div className="page-cont">
        <motion.section
        className="general-section"
          ref={productsRef}
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: true }}
        >
          <div className="text-part">
            <h1>Industrija Mašina i Traktora</h1>
            <p className="paragraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              totam quisquam quae animi? Qui dignissimos laborum sed tempore
              eius molestias accusantium facilis? Voluptas delectus aspernatur
              praesentium similique placeat veritatis dignissimos eveniet quam?
              Ipsa eos nihil, ipsum, dolores minima provident voluptates,
              eligendi delectus explicabo placeat quibusdam ullam molestias
              asperiores expedita quod sed quos voluptatum doloremque eum
              corrupti voluptas? Voluptates, consequuntur. Iste numquam tenetur
              voluptatem sit fugit officia magni reprehenderit quod unde
              laborum? Aspernatur iure ducimus libero optio omnis eius quisquam
              voluptas, atque porro tempora officia temporibus veritatis. Hic
              rerum ducimus, maxime unde reprehenderit vel, quaerat nihil odit
              ea pariatur quas deserunt!
            </p>
            <div className="count-segment">
              <span className="count">{`${productsCount}+`}</span>
              <p className="active-p">hiljada</p>
              <p className="active-p">proizvedenih</p>
              <p className="active-p">traktora</p>
            </div>
          </div>
          <div className="img-part"></div>
        </motion.section>

        <motion.section
          className="category-section"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: true }}
        >
          <h1>Modeli</h1>
          <div className="model-group">
            <Link to="/modeli/kategorija1" className="category one">
              <div className="category-img-part"></div>
              <h2>Kategorija 1</h2>
            </Link>
            <Link to="/modeli/kategorija2" className="category two">
              <div className="category-img-part"></div>
              <h2>Kategorija 2</h2>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
