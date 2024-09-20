import "../Styles/Forms.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const Form = ({ title }) => {
  const [success, setSuccess] = useState(false);
  const schema = yup.object().shape({
    fullName: yup.string().required("Molimo Vas unesite Vaše ime"),
    email: yup
      .string()
      .email("Unesite ispravnu email adresu")
      .required("Molimo Vas unesite Vašu email adresu"),
    number: yup.string().required("Molimo Vas unesite Vaš broj telefona"),
    text: yup.string().required("Polje ne sme ostati prazno"),
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
    <div className="form-cont">
      {success ? (
        <div className="success">
          <div className="success-img-cont"></div>
          <p className="p-success">
            Uspešno ste poslali poruku. Naš tim će Vam odgovoriti u najkraćem
            roku!
          </p>
          <button
            className="b-success"
            onClick={() => window.location.reload()}
          >
            Zatvori
          </button>
        </div>
      ) : (
        <form
        className="form"
          onSubmit={handleSubmit(onSubmit)}
        >
            <input type="text" value={title} placeholder="Predmet" />
          <p className="error">{errors.fullName?.message}</p>
          <input
            type="text"
            placeholder="Ime i prezime"
            {...register("fullName")}
          />
          <p className="error">{errors.email?.message}</p>
          <input
            type="text"
            placeholder="Email adresa"
            {...register("email")}
          />
          <p className="error">{errors.number?.message}</p>
          <input
            type="text"
            placeholder="Broj telefona"
            {...register("number")}
          />
          <p className="error">{errors.text?.message}</p>
          <textarea
            name="upit"
            id="area"
            cols="30"
            rows="10"
            placeholder="Tekst poruke"
            {...register("text")}
          />
          <button type="submit">Pošalji</button>
        </form>
      )}
    </div>
  );
};

export default Form;
