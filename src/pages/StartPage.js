import { Fragment } from "react";

import StartForLogin from "../components/StartingPageLogin/Start/StartForLogin";
import StartForm from "../components/StartingPageLogin/StartForm/StartForm";
import Contact from "../components/StartingPage/Contact/Contact";

const StartPage = () => {
  return (
    <Fragment>
      <StartForLogin />
      <StartForm />
      <Contact />
    </Fragment>
  );
};

export default StartPage;
