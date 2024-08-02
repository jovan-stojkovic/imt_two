import Form from "../Components/Form";
import "../Styles/Contact.scss";
import { motion } from "framer-motion";

const Contact = () => {
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

  const h2Motion = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  };

  return (
    <div className="page contact">
      <motion.div
        className="top-img-cont"
        variants={imgMotion}
        initial="hidden"
        animate="visible"
      ></motion.div>
      <div className="page-cont">
        <motion.h2 variants={h2Motion} initial="hidden" whileInView="visible">
          Postavite pitanje i naš tim će Vam odgovoriti u najkraćem roku!
        </motion.h2>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
