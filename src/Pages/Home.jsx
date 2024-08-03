import "../Styles/Home.scss";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

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

  useEffect(() => {
    let elements = document.querySelectorAll(".category-link");
    VanillaTilt.init(elements, {
      max: 5,
      speed: 1000,
      scale: 1.1,
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
      <motion.div
        className="top-img-cont"
        variants={imgMotion}
        initial="hidden"
        animate="visible"
      ></motion.div>
      <div className="page-cont">
        <motion.section
          className="general-section"
          ref={productsRef}
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
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
          viewport={{ amount: 0.2, once: true }}
        >
          <h1>Modeli</h1>
          <div className="model-group">
            <Link className="category-link one">
              <div className="category-img-part"></div>
              <h2>Kategorija 1</h2>
            </Link>
            <Link className="category-link two">
              <div className="category-img-part"></div>
              <h2>Kategorija 2</h2>
            </Link>
          </div>
        </motion.section>

        <motion.section
          className="about-section"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <div className="text-part">
            <h1>O Nama</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              reiciendis porro vel repellendus minima autem. Sapiente nobis rem
              illum soluta eveniet iusto explicabo, architecto veritatis error
              necessitatibus id, tempora corrupti, impedit quia? Quibusdam
              doloribus, tempore dicta expedita, fuga dignissimos labore
              pariatur voluptatem quasi deserunt voluptatibus? Iste accusantium
              minus corrupti dicta minima provident, eaque numquam in nobis, at
              quam enim ipsa optio accusamus atque, rem voluptate culpa?
              Corporis recusandae cumque doloribus sequi reiciendis illum alias,
              assumenda id tenetur in maiores aperiam libero? Ea quod quia qui
              impedit vel, in totam non! Quod voluptas quisquam, voluptates at
              ullam sit veritatis molestias facilis!
            </p>
          </div>
          <div className="img-part"></div>
        </motion.section>

        <motion.section
          className="flex-section"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <div className="left">
            <h2>Aktuelnosti</h2>
            <h4>Vesti i obaveštenja</h4>
            <div className="news-part">
              <p className="news">Lorem ipsum dolor sit amet.</p>
              <p className="news">Lorem ipsum dolor sit.</p>
              <p className="news">Lorem ipsum dolor sit amet consectetur.</p>
              <p className="news">
                Lorem ipsum dolor sit amet, consectetur adipis.
              </p>
              <p className="news">Lorem, ipsum dolor.</p>
              <p className="news">Lorem ipsum dolor sit amet.</p>
            </div>
            <Link
              to="/vesti"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              POGLEDAJTE OSTALE VESTI
            </Link>
          </div>
          <div className="right">
            <h2>Prodajna Mreža</h2>
            <h4>Pronađite najbliže prodajno mesto</h4>
            <div className="map-cont"></div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
