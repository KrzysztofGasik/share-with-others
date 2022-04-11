import { useState, useRef, useContext, Fragment } from "react";
import { useHistory } from "react-router-dom";

import AuthContext from "../../../store/auth-context";
import Form from "../../UI/Form/Form";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

import classes from "../../Auth/AuthForm.module.css";

const UpdateProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordConfirmInputRef = useRef();
  const updateEmail = useContext(AuthContext).updateEmail;
  const updatePassword = useContext(AuthContext).updateEmail;
  const user = useContext(AuthContext).user;

  const submitHandler = e => {
    e.preventDefault();

    const emailValue = emailInputRef.current.value;
    const passwordValue = passwordInputRef.current.value;
    const passwordConfirmValue = passwordConfirmInputRef.current.value;

    //? validation

    if (passwordValue !== passwordConfirmValue) {
      return setError("Passwords don't match");
    }

    const promises = [];
    setError("");
    setIsLoading(true);
    if (emailValue !== user.email) promises.push(updateEmail(emailValue));
    if (passwordValue) promises.push(updatePassword(passwordValue));

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(error => {
        setError("Failed to update account = ", error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Fragment>
      <h1 className={classes.Header}>Update profile</h1>
      {error && <p className={classes.Error}>{error}</p>}
      {isLoading && <p className={classes.Loading}>Updating profile...</p>}
      <Form onSubmit={submitHandler}>
        <Input
          id="email"
          type="email"
          label="Your email"
          placeholder="Type your email"
          inputref={emailInputRef}
          value={user.email}
        />
        <Input
          id="password"
          type="password"
          label="Your password"
          placeholder="Leave blank to keep the same"
          inputref={passwordInputRef}
        />
        <Input
          id="passwordConfirm"
          type="password"
          label="Repeat password"
          placeholder="Leave blank to keep the same"
          inputref={passwordConfirmInputRef}
        />
        <Button text="Change"></Button>
        
      </Form>
    </Fragment>
  );
};

export default UpdateProfile;
