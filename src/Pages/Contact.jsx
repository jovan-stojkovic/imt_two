import Form from "../Components/Form";
import "../Styles/Contact.scss";
import TextReveal from "../Components/TextReveal";

const Contact = () => {




  return (
    <div className="page contact">
        <TextReveal text="KONTAKT" />
      <div className="page-cont">

        <Form />
      </div>
    </div>
  );
};

export default Contact;
