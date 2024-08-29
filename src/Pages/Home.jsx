import "../Styles/Home.scss";
import { motion } from "framer-motion";

const Home = () => {
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

  return (
    <div className="page home">
      <motion.div
        className="top-img-cont"
        variants={imgMotion}
        initial="hidden"
        animate="visible"
      ></motion.div>
      <div className="page-cont"></div>
    </div>
  );
};

export default Home;
