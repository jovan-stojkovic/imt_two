import { motion } from "framer-motion";

const imgMotion = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
};

const TopImage = () => {
  return (
    <motion.div
      className="top-img-cont"
      variants={imgMotion}
      initial="hidden"
      animate="visible"
    ></motion.div>
  );
};

export default TopImage;
