import "../Styles/Download.scss";
import { motion } from "framer-motion";

const Download = () => {
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
    <div className="page download">
      <motion.div
        className="top-img-cont"
        variants={imgMotion}
        initial="hidden"
        animate="visible"
      >
        <h1>Preuzimanja</h1>
      </motion.div>

      <div className="page-cont">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem vero
          voluptates dolorum, error fuga nulla? Aperiam, rem omnis, provident
          mollitia suscipit reiciendis tenetur magnam enim, sequi reprehenderit
          magni? Enim unde, officiis doloremque expedita dicta cupiditate. Ipsum
          quibusdam vero, est reiciendis voluptas voluptatibus, beatae expedita
          delectus placeat commodi blanditiis reprehenderit corrupti iste sit,
          repellat quisquam dolore quos id tenetur dolores assumenda praesentium
          enim nam quis. Temporibus error dolorum pariatur voluptatibus hic
          perspiciatis sed non excepturi inventore ipsam voluptas minus
          cupiditate libero ducimus quaerat maxime vero quas illum suscipit
          corrupti id labore, fugiat dignissimos nam. Magnam unde veritatis non
          impedit quidem dolores!
        </p>

        {/* <div className="bar">
          <div className="red-part"></div>
          <div className="triangle">
            <div className="red">
              <div className="red-triangle"></div>
              <div className="gray-triangle"></div>
              <div className="gray"></div>
            </div>
          </div>
          <div className="transparent-part">
            <div className="logo-cont"></div>
          </div>
        </div> */}

        <div className="bar">
          <div className="left-red"></div>
          <div className="creation">
            <div className="background-gray"></div>
            <div className="creation-left">
              <div className="left-trap"></div>
              <div className="left-round"></div>
            </div>

            <div className="creation-right">
              <div className="right-trap"></div>
              <div className="right-round"></div>
            </div>
          </div>
          <div className="right-transparent">
            <div className="logo-cont"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
