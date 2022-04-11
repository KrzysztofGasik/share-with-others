import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import InputCheckbox from "../InputCheckbox/InputCheckbox";
import Button from "../../../UI/Button/Button";
import InfoBarLogin from "../../InfoBar/InfoBarForLogin"

import classes from "../Form.module.css";

const Page1 = () => {
  const step1 = useSelector(state => state.step1);
  const dataIsTruthy = Object.values(step1).some(element => element);
  const history = useHistory();

  const prevBtnHandler = () => {
    history.push("/start")
    window.location.reload();
  };

  const nextBtnHandler = () => {
    if (dataIsTruthy) history.push("/form/page2");
  };
  return (
    <Fragment>
      <InfoBarLogin step={1}/>
      <InputCheckbox data={step1} step={1} />
      <div className={classes.ButtonWrapper}>
        <Button
          className={classes.Button}
          text="Back to start page"
          onClick={prevBtnHandler}
        />
        <Button
          className={classes.Button}
          text="Step 2"
          onClick={nextBtnHandler}
          disabled={!dataIsTruthy}
        />
      </div>
    </Fragment>
  );
};

export default Page1;
