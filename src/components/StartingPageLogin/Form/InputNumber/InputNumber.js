import { Fragment } from "react";
import { useDispatch } from "react-redux";

import { step2Actions } from "../../../../store/slices/step2/step2";

import classes from "./InputNumber.module.css";

const InputNumber = props => {
  const { data } = props;
  const dispatch = useDispatch();

  const onChangeHandler = e => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    const change = { name, value };
    dispatch(step2Actions.add(change));
  };

  return (
    <div className={classes.Wrapper}>
      <Fragment>
        {Object.entries(data).map(element => {
          const key = element[0];
          const value = element[1];
          return (
            <div className={classes.InputWrapper} key={key}>
              <label className={classes.Label} htmlFor={key}>
                {key}
              </label>
              <input
                type="number"
                onChange={onChangeHandler}
                name={key}
                defaultValue={value}
                className={classes.Input}
                min="1"
                max="10"
              />
            </div>
          );
        })}
      </Fragment>
    </div>
  );
};

export default InputNumber;
