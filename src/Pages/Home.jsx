import "../Styles/Home.scss";
import CustomSwiper from "../Components/CustomSwiper";
import PortraitSwiper from "../Components/PortraitSwiper";
import { motion } from "framer-motion";
import HomeModels from "../Components/HomeModels";
import HomeAbout from "../Components/HomeAbout";

const Home = ({ sectionMotion }) => {
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

  return (
    <>
      <motion.div variants={imgMotion} initial="hidden" animate="visible">
        <div className="landscape-swiper">
          <CustomSwiper />
        </div>

        <div className="portrait-swiper">
          <PortraitSwiper />
        </div>
      </motion.div>

      <motion.section
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
      >
        <HomeModels />
      </motion.section>

      <motion.section
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
      >
        <HomeAbout />
      </motion.section>
    </>
  );
};

export default Home;
