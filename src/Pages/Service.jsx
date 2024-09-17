import "../Styles/Forms.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const Service = () => {
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

  return (
    <>
      <div className="page about">
        <h1 className="main-headline">ZAKAŽITE SERVIS</h1>
        <div className="page-cont">
          {/* <h2>PODACI O VLASNIKU I MODELU</h2> */}
          {/* <div className="service-form">
            <div className="service-left">
              <label htmlFor="name">
                Ime i prezime<span>*</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Unesite Vaše ime i prezime"
                {...register("fullName")}
              />
              <p className="error">{errors.fullName?.message}</p>

              <div className="apart">
                <label htmlFor="email">
                  Email<span>*</span>
                </label>
                <input
                  type="text"
                  id="email"
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
                  {...register("number")}
                />
              </div>

              <label htmlFor="model">
                
              </label>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Service;
