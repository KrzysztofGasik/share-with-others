import {
  useState,
  useRef,
  useContext,
  Fragment,
  useEffect,
  useCallback
} from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../../../store/auth-context";
import Form from "../../../UI/Form/Form";
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";

import classes from "../../AuthForm.module.css";

const ForgotPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");
  const emailInputRef = useRef();
  const resetPassword = useContext(AuthContext).resetPassword;

  const performAsyncCall = useCallback(
    async email => {
      try {
        setError("");
        await resetPassword(email);
        setNotification("Check your mail for further instructions");
      } catch (error) {
        setError(`Failed to reset password - ${error.message}`);
      }
    },
    [resetPassword]
  );

  const submitHandler = async e => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(() => {
    const emailValue = emailInputRef.current.value;
    if (isSubmitted) {
      performAsyncCall(emailValue);
    }
    return () => {
      setIsSubmitted(false);
    };
  }, [performAsyncCall, isSubmitted]);

  return (
    <Fragment>
      <h1 className={classes.Header}>Reset password</h1>
      {error && <p className={classes.Error}>{error}</p>}
      {notification && <p className={classes.Notification}>{notification}</p>}
      <Form onSubmit={submitHandler}>
        <Input
          id="email"
          type="email"
          label="Your email"
          placeholder="Type your email"
          inputref={emailInputRef}
        />
        <Button text="Reset password"></Button>
        <Link to="/login" className={classes.Link}>
          Log in
        </Link>
        <Link to="/signup" className={classes.Link}>
          Need an account? Sign up
        </Link>
      </Form>
    </Fragment>
  );
};

export default ForgotPassword;
