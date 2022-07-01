import { useForm } from "react-hook-form";

import ContactInput from "../ContactInput/ContactInput";
import Form from "../../../UI/Form/Form";
import classes from "./ContactForm.module.css";

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact form data", data);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ContactInput label="name" register={register} required errors={errors} />
      {errors.name && <p className={classes.Error}>This field is required</p>}
      <ContactInput
        label="email"
        register={register}
        required
        errors={errors}
        pattern={emailRegex}
      />
      {errors.email && <p className={classes.Error}>This field is required</p>}
      <ContactInput
        label="message"
        register={register}
        errors={errors}
      />
      <input type="submit" value="Send" className={classes.InputSubmit} />
    </Form>
  );
};

export default ContactForm;
