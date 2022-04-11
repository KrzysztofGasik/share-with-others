import { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import InfoBarLogin from "../../InfoBar/InfoBarForLogin";

import classes from "./ThankYou.module.css";

const ThankYou = () => {
  const [counter, setCounter] = useState(5);
  const history = useHistory();
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(counter - 1);
    }, 1000);

    if (counter === 0) {
      clearInterval(timer);
      history.push("/start");
    }

    return () => {
      clearInterval(timer);
    };
  }, [counter, history]);

  return (
    <Fragment>
      <InfoBarLogin step={6} />
      <h3 className={classes.Heading}>
        You will be redirected to home page in {counter} seconds
      </h3>
    </Fragment>
  );
};

export default ThankYou;
