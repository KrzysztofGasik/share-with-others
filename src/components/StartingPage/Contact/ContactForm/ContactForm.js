import ContactInput from "../ContactInput/ContactInput";
import Form from "../../../UI/Form/Form";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const submitHandler = e => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={submitHandler}>
      <span className={classes.Title}>Contact form</span>
      <ContactInput
        id="name"
        type="text"
        label="Name"
        placeholder="Type your name"
      />
      <ContactInput
        id="email"
        type="email"
        label="Email"
        placeholder="Type your email"
      />
      <ContactInput
        id="message"
        type="text"
        label="Message"
        placeholder="Type your message"
      />
      <input type="submit" value="Send" className={classes.InputSubmit} />
    </Form>
  );
};

export default ContactForm;
