import "../Styles/Home.scss";
import CustomSwiper from "../Components/CustomSwiper";
import { motion } from "framer-motion";
import HomeModels from "../Components/HomeModels";
import HomeAbout from "../Components/HomeAbout";

const Home = () => {
  const imgMotion = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const sectionMotion = {
    hidden: {
      opacity: 0,
      x: -100,
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

  return (
    <>
      <motion.div variants={imgMotion} initial="hidden" animate="visible">
        <CustomSwiper />
      </motion.div>

      <motion.div
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
      >
        <HomeModels />
      </motion.div>

      <motion.div
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
      >
        <HomeAbout />
      </motion.div>
    </>
  );
};

export default Home;
