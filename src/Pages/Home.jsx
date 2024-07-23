import "../Styles/Home.scss";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Home = () => {
  const [productsCount, setProductsCount] = useState(0);
  const [expCount, setExpCount] = useState(0);

  const productsRef = useRef(null);
  const isProductsInView = useInView(productsRef, { once: true, amount: 0.4 });

  const expRef = useRef(null);
  const isExpInView = useInView(expRef, { once: true, amount: 0.4 });

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

  const imgMotion = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 2,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="page home">
      <motion.div
        className="img-cont"
        variants={imgMotion}
        initial="hidden"
        animate="visible"
      >
        <img src="/backgrounds/home.webp" alt="background-image" />
      </motion.div>
      <div className="page-cont">
        <section ref={productsRef}>
          <div className="text-part">
            <h1>Industrija Mašina i Traktora</h1>
            <p>
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
            <span>{`${productsCount}+`}</span>
            <p>hiljada</p>
            <p>proizvedenih</p>
            <p>traktora</p>
          </div>
          <div className="img-part"></div>
        </section>
      </div>
    </div>
  );
};

export default Home;
