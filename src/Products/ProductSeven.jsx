import "../Styles/Product.scss";
import { motion } from "framer-motion";
import Form from "../Components/Form";

const ProductSeven = () => {
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

  const h1Motion = {
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

  const title = "IMT 587M HVAC";

  return (
    <>
      <div className="page product seven">
        <motion.div
          className="top-img-cont"
          variants={imgMotion}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={h1Motion}>{title}</motion.h1>
        </motion.div>

        <div className="page-cont">
          <p className="upper-text">
            Our robust 4-cylinder engine delivers a remarkable 47-80 hp,
            effortlessly propelling our versatile tractor, designed for optimal
            comfort and productivity. Equipped with a 12-forward & 4- Reverse
            Synchromesh transmission, seamless shifts are at your fingertips.
          </p>
          <div className="main-part">
            <div className="left">
              <div className="img"></div>
              <h2>{title}</h2>
              <Form title={title} />
            </div>
            <div className="right">
              <h2>Specifikacije Traktora</h2>
              <div className="specs">
                <div className="left-side">
                  <p className="l">hp</p>
                  <p className="l">Drive</p>
                  <p className="l">Clutch</p>
                  <p className="l">Gearbox & type</p>
                  <p className="l">Gears</p>
                  <p className="l">Max speed</p>
                  <p className="l">PTO</p>
                  <p className="l">Hydraulics</p>
                  <p className="l">Lift cap (kgf)</p>
                  <p className="l">Diff-lock</p>
                  <p className="l">Steering</p>
                  <p className="l">Ground Clearance</p>
                  <p className="l">Comfort</p>
                </div>
                <div className="right-side">
                  <p className="r">80</p>
                  <p className="r">4WD</p>
                  <p className="r">Dual</p>
                  <p className="r">Partial Synchromesh</p>
                  <p className="r">12 Forward + 4 Reverse</p>
                  <p className="r">34 kmph</p>
                  <p className="r">Live PTO, 540 rpm</p>
                  <p className="r">Draft, Position & Response Control</p>
                  <p className="r">2400 kgf</p>
                  <p className="r">Yes</p>
                  <p className="r">Power</p>
                  <p className="r">330 mm</p>
                  <p className="r">HVAC cabin, Projector Headlamps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSeven;
