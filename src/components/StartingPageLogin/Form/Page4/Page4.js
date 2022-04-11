import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import InputAddress from "../InputAddress/InputAddress";
import Button from "../../../UI/Button/Button";
import InfoBarLogin from "../../InfoBar/InfoBarForLogin";
import Form from "../../../UI/Form/Form"

import classes from "../Form.module.css";
import inputClasses from "./Page4.module.css";

const streetRegex = /[a-zA-Z0-9]{6,35}/gm;
const cityRegex = /[a-zA-Z\-\s]{6,35}/gm;
const postalRegex = /\d{2}-\d{3}/gm;
const phoneRegex = /\d{3}-\d{3}-\d{3}/gm;
const dateRegex = /\d{4}-\d{2}-\d{2}/gm;
const hourRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

const Page4 = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const step4 = useSelector(state => state.step4);
  const formValuesFromStorage = Object.values(step4);
  const history = useHistory();

  const prevBtnHandler = () => history.push("/form/page3");
  const nextBtnHandler = () => {
    if (isFormValid) {
      history.push("/form/sumup");
    }
  };

  const onSubmit = data => {
    setIsFormValid(true);
  };

  return (
    <Fragment>
      <InfoBarLogin step={4} />
      <Form FormFlexStart={true} onSubmit={handleSubmit(onSubmit)}>
        <InputAddress
          label="street"
          register={register}
          required
          errors={errors}
          pattern={streetRegex}
          defaultValue={formValuesFromStorage[0]}
        />
        {errors.street && (
          <p className={inputClasses.Error}>This field is required</p>
        )}
        <InputAddress
          label="city"
          register={register}
          required
          errors={errors}
          pattern={cityRegex}
          defaultValue={formValuesFromStorage[1]}
        />
        {errors.city && (
          <p className={inputClasses.Error}>This field is required</p>
        )}
        <InputAddress
          label="postal"
          register={register}
          required
          errors={errors}
          pattern={postalRegex}
          defaultValue={formValuesFromStorage[2]}
        />
        {errors.postal && (
          <p className={inputClasses.Error}>
            This field is required - postal code format XX-XXX
          </p>
        )}
        <InputAddress
          label="phone"
          register={register}
          required
          errors={errors}
          pattern={phoneRegex}
          defaultValue={formValuesFromStorage[3]}
        />
        {errors.phone && (
          <p className={inputClasses.Error}>
            This field is required - phone number format XXX-XXX-XXX
          </p>
        )}
        <InputAddress
          label="date"
          register={register}
          required
          errors={errors}
          pattern={dateRegex}
          defaultValue={formValuesFromStorage[4]}
        />
        {errors.date && (
          <p className={inputClasses.Error}>
            This field is required - date format DD.MM.YYYY
          </p>
        )}
        <InputAddress
          label="hour"
          register={register}
          required
          errors={errors}
          pattern={hourRegex}
          defaultValue={formValuesFromStorage[5]}
        />
        {errors.hour && (
          <p className={inputClasses.Error}>
            This field is required - hour format HH:MM
          </p>
        )}
        <input
          type="submit"
          value="Check form validation"
          className={inputClasses.Submit}
        />
      </Form>
      <div className={classes.ButtonWrapper}>
        <Button
          className={classes.Button}
          text="Step 3"
          onClick={prevBtnHandler}
        />
        <Button
          className={classes.Button}
          text="Sum up"
          onClick={nextBtnHandler}
          disabled={!isFormValid}
        />
      </div>
    </Fragment>
  );
};

export default Page4;
