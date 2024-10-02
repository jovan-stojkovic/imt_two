import "../Styles/Media.scss";
import { motion } from "framer-motion";
import TextReveal from "../Components/TextReveal";
import Bar from "../Components/Bar";

const Media = ({ sectionMotion }) => {
  return (
    <>
      <div className="page media">
        <div className="reveal-div-flex">
          <TextReveal text="MEDIA" />
        </div>
        <div className="page-cont">
          <motion.section
            variants={sectionMotion}
            initial="hidden"
            animate="visible"
          >
            <Bar headline={"MEDIA"} />

            <h1 className="soon">USKORO!</h1>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default Media;
