import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import InputNumber from "../InputNumber/InputNumber";
import Button from "../../../UI/Button/Button";
import InfoBarLogin from "../../InfoBar/InfoBarForLogin"

import classes from "../Form.module.css";

const Page2 = () => {
  const step2 = useSelector(state => state.step2);
  const dataIsTruthy = Object.values(step2).some(element => element);
  const history = useHistory();

  const prevBtnHandler = () => history.push("/form/page1");

  const nextBtnHandler = () => {
    if (dataIsTruthy) history.push("/form/page3");
  };
  return (
    <Fragment>
      <InfoBarLogin step={2}/>
      <InputNumber data={step2} step={2} />
      <div className={classes.ButtonWrapper}>
        <Button
          className={classes.Button}
          text="Step 1"
          onClick={prevBtnHandler}
        />
        <Button
          className={classes.Button}
          text="Step 3"
          onClick={nextBtnHandler}
          disabled={!dataIsTruthy}
        />
      </div>
    </Fragment>
  );
};

export default Page2;
