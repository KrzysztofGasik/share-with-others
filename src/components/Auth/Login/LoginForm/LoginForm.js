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

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const login = useContext(AuthContext).login;

  const performAsyncCall = useCallback(
    async (email, password) => {
      try {
        setError("");
        setIsLoading(true);
        const awaitLogin = await login(email, password);
        if (awaitLogin) {
          history.push("/start");
        }
      } catch (error) {
        const regexFirebase = /Firebase\b/gm
        const regexStart = /\(.*?\)/gm
        const trimError = error.message.replace(regexFirebase, "").replace(regexStart, "").replace(":", "").replace(" .",".")
        setError(`Failed to sign in - ${trimError}`);
      }

      setIsLoading(false);
    },
    [history, login]
  );

  const SubmitHandler = e => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(() => {
    const emailValue = emailInputRef.current.value;
    const passwordValue = passwordInputRef.current.value;
    if (isSubmitted) {
      performAsyncCall(emailValue, passwordValue);
    }
    return () => {
      setIsSubmitted(false);
    };
  }, [performAsyncCall, isSubmitted]);

  return (
    <Fragment>
      <h1 className={classes.Header}>Log In</h1>
      {error && <p className={classes.Error}>{error}</p>}
      {isLoading && <p className={classes.Loading}>Logging in...</p>}
      <Form onSubmit={SubmitHandler}>
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
        <Button text="Log In"></Button>
      </Form>
    </Fragment>
  );
};

export default LoginForm;
