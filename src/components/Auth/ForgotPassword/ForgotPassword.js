import { Link } from "react-router-dom";

import ForgotPasswordForm from "./ForgotPasswordForm/ForgotPasswordForm";

import classes from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  return (
    <section className={classes.Overlay}>
      <ForgotPasswordForm />
      <Link to="/" className={classes.Link}>
        Return to homepage
      </Link>
    </section>
  );
};

export default ForgotPassword;
