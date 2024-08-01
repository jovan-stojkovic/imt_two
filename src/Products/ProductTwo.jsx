import "../Styles/Product.scss";
import { motion } from "framer-motion";
import Form from "../Components/Form";

const ProductTwo = () => {
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

  const title = "IMT 539.3 DI";

  return (
    <>
      <div className="page product two">
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
            IMT tractors, which range between 47 hp to 80 hp, are suitable for
            cultivating agricultural lands, vineyards & orchards and for
            infrastructure applications.
          </p>
          <div className="main-part">
            <div className="left">
              <div className="img"></div>
              <h2>{title}</h2>
              <Form title={title} />
            </div>
            <div className="right">
              <h4>Specifikacije Traktora</h4>
              <div className="specs">
                <div className="left-side">
                  <p className="l">hp</p>
                  <p className="l">Drive</p>
                  <p className="l">Exhaust</p>
                  <p className="l">Air Cleaner</p>
                  <p className="l">Clutch</p>
                  <p className="l">Gearbox & type</p>
                  <p className="l">PTO</p>
                  <p className="l">Final reduction</p>
                  <p className="l">Hydraulics</p>
                  <p className="l">Lift cap (kgf)</p>
                  <p className="l">Front tyres</p>
                  <p className="l">Rear tyres</p>
                  <p className="l">Brakes</p>
                  <p className="l">ROPS</p>
                  <p className="l">Swinging drawbar</p>
                  <p className="l">Front weight</p>
                  <p className="l">Rear weight</p>
                  <p className="l">Oil pipe kit</p>
                  <p className="l">Spool valve</p>
                  <p className="l">Compressor</p>
                  <p className="l">Optional features</p>

                </div>
                <div className="right-side">
                  <p className="r">47, EUIII A</p>
                  <p className="r">2WD</p>
                  <p className="r">Vertical</p>
                  <p className="r">Dry</p>
                  <p className="r">Dual</p>
                  <p className="r">8F+2R Sliding Mesh, Centre shift</p>
                  <p className="r">Single Speed, 540 rpm</p>
                  <p className="r">Direct drive</p>
                  <p className="r">Oil immersed</p>
                  <p className="r">1100</p>
                  <p className="r">6.00 x 16</p>
                  <p className="r">12.4 x 28</p>
                  <p className="r">Drum</p>
                  <p className="r">No</p>
                  <p className="r">Yes</p>
                  <p className="r">No</p>
                  <p className="r">No</p>
                  <p className="r">Yes</p>
                  <p className="r">No</p>
                  <p className="r">Copressor</p>
                  <p className="r">ROPS</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTwo;
