import { Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthContext from "../../../../store/auth-context";
import { v4 as uuidv4 } from "uuid";

import { persistor } from "../../../../store/index";
import { step1Actions } from "../../../../store/slices/step1/step1";
import { step2Actions } from "../../../../store/slices/step2/step2";
import { step3Actions } from "../../../../store/slices/step3/step3";
import { step4Actions } from "../../../../store/slices/step4/step4";
import Button from "../../../UI/Button/Button";
import InfoBarLogin from "../../InfoBar/InfoBarForLogin";
import helperFunctions from "../FormHelperFunctions/FormHelperFunctions";

import classes from "../Form.module.css";
import sumupClasses from "./SumUp.module.css";

const SumUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = useContext(AuthContext).user.uid;
  const data = useSelector((state) => state);
  const things = helperFunctions.transformStep1(data);
  const bags = Object.values(data.step2);
  const organization = Object.values(data.step3);
  const address = helperFunctions.transformStep4(data, sumupClasses.Title);
  const sumupArray = [things, bags, organization, address];
  const sumupArrayText = [
    "Things you want to share:",
    "Bags:",
    "Organization you want to help:",
    "Address for collecting:",
  ];

  const clearForm = () => {
    localStorage.removeItem("persist:root");
    persistor.purge();
    dispatch(step1Actions.clear());
    dispatch(step2Actions.clear());
    dispatch(step3Actions.clear());
    dispatch(step4Actions.clear());
  };

  const prevBtnHandler = () => history.push("/form/page4");

  const nextBtnHandler = async () => {
    const createdDate = new Date().toISOString().split("T")[0];
    const createdHour = new Date().toISOString().split("T")[1].slice(0, 8);
    // console.log(createdDate, createdHour);
    const donation = {
      id: Date.now(),
      created: `${createdDate} / ${createdHour}`,
      step1: data.step1,
      step2: data.step2,
      step3: data.step3,
      step4: data.step4,
    };

    const response = await fetch(
      `https://share-with-other-users-db-default-rtdb.firebaseio.com/${userId}/donations.json`,
      {
        method: "POST",
        body: JSON.stringify(donation),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const sendData = await response.json();
    if (sendData) {
      clearForm();
      history.push("/form/thank-you");
    }
  };
  return (
    <Fragment>
      <InfoBarLogin step={5} />
      <ul className={sumupClasses.List}>
        {sumupArray.map((element, index) => {
          const key = uuidv4();
          return (
            <Fragment key={key}>
              <li className={sumupClasses.ListElement}>
                <span className={sumupClasses.Title}>
                  {sumupArrayText[index]}
                  <br />
                </span>
                {element}
              </li>
              <hr className={sumupClasses.HRLine} />
            </Fragment>
          );
        })}
      </ul>
      <div className={classes.ButtonWrapper}>
        <Button
          className={classes.Button}
          text="Step 4"
          onClick={prevBtnHandler}
        />
        <Button
          className={classes.Button}
          text="Confirm and send"
          onClick={nextBtnHandler}
        />
      </div>
    </Fragment>
  );
};

export default SumUp;
