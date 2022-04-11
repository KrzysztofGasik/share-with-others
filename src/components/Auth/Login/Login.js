import { Link } from "react-router-dom";

import LoginForm from "./LoginForm/LoginForm";

import classes from "./Login.module.css";

const Login = () => {
  return (
    <section className={classes.Overlay}>
      <LoginForm />
      <Link to="forgot-password" className={classes.Link}>
        Forgot password?
      </Link>
      <Link to="/signup" className={classes.Link}>
        Need an account? Sign Up
      </Link>
      <Link to="/" className={classes.Link}>
        Return to homepage
      </Link>
    </section>
  );
};

export default Login;
