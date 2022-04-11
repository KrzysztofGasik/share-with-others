import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import InputSelect from "../InputSelect/InputSelect";
import Organizations from "../../../StartingPage/Funds/Organizations";
import Button from "../../../UI/Button/Button";
import InfoBarLogin from "../../InfoBar/InfoBarForLogin"

import classes from "../Form.module.css";

const inputData = Organizations.map(el => el.name);

const Page3 = () => {
  const step3 = useSelector(state => state.step3);
  const dataIsTruthy = Object.values(step3).some(element => element);
  const history = useHistory();

  const prevBtnHandler = () => history.push("/form/page2");

  const nextBtnHandler = () => {
    if (dataIsTruthy) history.push("/form/page4");
  };
  return (
    <Fragment>
      <InfoBarLogin step={3}/>
      <InputSelect data={step3} inputData={inputData} step={3} />
      <div className={classes.ButtonWrapper}>
        <Button
          className={classes.Button}
          text="Step 2"
          onClick={prevBtnHandler}
        />
        <Button
          className={classes.Button}
          text="Step 4"
          onClick={nextBtnHandler}
          disabled={!dataIsTruthy}
        />
      </div>
    </Fragment>
  );
};

export default Page3;
