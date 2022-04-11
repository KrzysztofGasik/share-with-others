import { Link } from "react-router-dom";

import SignupForm from "./SignupForm/SignupForm";

import classes from "./Signup.module.css";

const Signup = () => {
  return (
    <section className={classes.Overlay}>
      <SignupForm />
      <Link to="/login" className={classes.Link}>
        Already have an account? Log In
      </Link>
      <Link to="/" className={classes.Link}>
        Return to homepage
      </Link>
    </section>
  );
};

export default Signup;
