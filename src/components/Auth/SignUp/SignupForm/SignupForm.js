import {
  useState,
  useRef,
  useContext,
  Fragment,
  useEffect,
  useCallback
} from "react";
import { useHistory } from "react-router-dom";

import AuthContext from "../../../../store/auth-context";
import Form from "../../../UI/Form/Form";
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";

import classes from "../../AuthForm.module.css";

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordConfirmInputRef = useRef();
  const signup = useContext(AuthContext).signup;

  const performAsyncCall = useCallback(
    async (email, password) => {
      try {
        setError("");
        setIsLoading(true);
        const awaitSignup = await signup(email, password);
        if (awaitSignup) history.push("/login");
      } catch (error) {
        const regexFirebase = /Firebase\b/gm
        const regexStart = /\(.*?\)/gm
        const trimError = error.message.replace(regexFirebase, "").replace(regexStart, "").replace(":", "").replace(" .",".")
        setError(`Failed to create account - ${trimError}`);
        setIsLoading(false);
      }
    },
    [history, signup]
  );

  const submitHandler = async e => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(() => {
    const emailValue = emailInputRef.current.value;
    const passwordValue = passwordInputRef.current.value;
    const passwordConfirmValue = passwordConfirmInputRef.current.value;

    //? validation

    if (passwordValue !== passwordConfirmValue) {
      return setError("Passwords don't match");
    }
    if (isSubmitted) {
      performAsyncCall(emailValue, passwordValue);
    }
    return () => {
      setIsSubmitted(false);
    };
  }, [performAsyncCall, isSubmitted]);

  return (
    <Fragment>
      <h1 className={classes.Header}>Sign up</h1>
      {error && <p className={classes.Error}>{error}</p>}
      {isLoading && <p className={classes.Loading}>Loading...</p>}
      <Form onSubmit={submitHandler}>
        <Input
          id="email"
          type="email"
          label="Your email"
          placeholder="Type your email"
          inputref={emailInputRef}
        />
        <Input
          id="password"
          type="password"
          label="Your password"
          placeholder="Type your password"
          inputref={passwordInputRef}
        />
        <Input
          id="passwordConfirm"
          type="password"
          label="Repeat password"
          placeholder="Confirm your password"
          inputref={passwordConfirmInputRef}
        />
        <Button text="Sign up"></Button>
      </Form>
    </Fragment>
  );
};

export default SignupForm;
