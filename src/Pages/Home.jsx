import "../Styles/Home.scss";
import CustomSwiper from "../Components/CustomSwiper";
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
    <>
      <motion.div variants={imgMotion} initial="hidden" animate="visible">
        <CustomSwiper />
      </motion.div>
    </>
  );
};

export default Home;
