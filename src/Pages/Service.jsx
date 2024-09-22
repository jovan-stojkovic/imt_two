import "../Styles/Forms.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import TextReveal from "../Components/TextReveal";
import Bar from "../Components/Bar";
import { motion } from "framer-motion";

const Service = ({ sectionMotion }) => {
  const [success, setSuccess] = useState(false);
  const schema = yup.object().shape({
    fullName: yup.string().required("Molimo Vas unesite Vaše ime."),
    email: yup
      .string()
      .email("Unesite ispravnu email adresu.")
      .required("Molimo Vas unesite Vašu email adresu."),
    number: yup.number().required("Molimo Vas unesite Vaš broj telefona."),
    hours: yup
      .number()
      .required("Molimo Vas unesite broj radnih sati traktora."),
    desc: yup.string().required("Polje ne sme ostati prazno."),
    message: yup.string().required("Polje ne sme ostati prazno."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    setSuccess(true);
  };

  const formApear = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };

  return (
    <>
      <div className="page service">
        <div className="reveal-div-flex">
          <TextReveal text="ZAKAŽITE" />
          <TextReveal text="SERVIS" />
        </div>
        <motion.div
          className="page-cont"
          variants={sectionMotion}
          initial="hidden"
          animate="visible"
        >
          <Bar headline={"PODACI O VLASNIKU I MODELU"} />

          <motion.div variants={formApear}>
            <form
              className="service-form"
              // onSubmit={handleSubmit(onSubmit)}
            >
              <div className="service-flex">
                <div className="service-left">
                  <label htmlFor="name">
                    Ime i prezime<span>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="service-text-input"
                    placeholder="Unesite Vaše ime i prezime"
                    {...register("fullName")}
                  />
                  <p className="error">{errors.fullName?.message}</p>

                  <label htmlFor="email">
                    Email<span>*</span>
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="service-text-input"
                    placeholder="Unesite Vaš email"
                    {...register("email")}
                  />
                  <p className="error">{errors.email?.message}</p>

                  <label htmlFor="number">
                    Telefon<span>*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Unesite broj telefona"
                    id="number"
                    className="service-text-input"
                    {...register("number")}
                  />

                  <div className="model-input">
                    <label htmlFor="model">Model Traktora:</label>
                    <div className="model-boxes">
                      <label>
                        <input
                          type="radio"
                          name="model"
                          value="IMT 539.2 DI"
                          defaultChecked
                        />
                        IMT 539.2 DI
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="model"
                          value="IMT 549.3 DI 4WD"
                        />
                        IMT 549.3 DI 4WD
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="model"
                          value="IMT 565.2 DI 4WD"
                        />
                        IMT 565.2 DI 4WD
                      </label>
                      <label>
                        <input type="radio" name="model" value="TAFE 4615" />
                        TAFE 4615
                      </label>
                      <label>
                        <input type="radio" name="model" value="TAFE 6515" />
                        TAFE 6515
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="model"
                          value="TAFE 6028M 4WD"
                        />
                        TAFE 6028M 4WD
                      </label>
                      <label>
                        <input type="radio" name="model" value="IMT 569M" />
                        IMT 569M
                      </label>
                      <label>
                        <input type="radio" name="model" value="IMT 577M" />
                        IMT 577M
                      </label>
                      <label>
                        <input type="radio" name="model" value="IMT 587M" />
                        IMT 587M
                      </label>
                    </div>
                  </div>

                  <div className="input-flex">
                    <div className="hours-cont">
                      <label htmlFor="hours">Broj radnih sati traktora:</label>
                      <input
                        type="number"
                        id="hours"
                        className="service-text-input"
                        placeholder="Broj radnih sati"
                        {...register("hours")}
                      />
                      <p className="error">{errors.hours?.message}</p>
                    </div>

                    <div className="contact-cont">
                      <p className="contact">
                        Kako želite da budete kontaktirani?
                      </p>
                      <div className="labels">
                        <label>
                          <input
                            type="radio"
                            name="contact"
                            value="email"
                            defaultChecked
                          />
                          Mailom
                        </label>
                        <label>
                          <input type="radio" name="contact" value="telefon" />
                          Telefonom
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="service-right">
                  <p className="error">{errors.desc?.message}</p>
                  <label htmlFor="area">
                    Opis kvara<span>*</span>
                  </label>
                  <textarea
                    name="desc"
                    id="desc"
                    cols="30"
                    rows="8"
                    placeholder="Unesite opis kvara"
                    className="service-area"
                    {...register("desc")}
                  />

                  <p className="error">{errors.message?.message}</p>
                  <label htmlFor="message">
                    Poruka<span>*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="8"
                    placeholder="Unesite poruku"
                    className="service-area"
                    {...register("message")}
                  />
                </div>
              </div>
              <button type="submit">Pošalji</button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Service;
