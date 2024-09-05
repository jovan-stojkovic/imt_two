import "../Styles/Media.scss";
import { motion } from "framer-motion";

const Media = () => {
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
    <div className="page media">
      <motion.div
        className="top-img-cont"
        variants={imgMotion}
        initial="hidden"
        animate="visible"
      >
        <h1>Media</h1>
      </motion.div>

      <div className="page-cont"></div>
    </div>
  );
};

export default Media;
