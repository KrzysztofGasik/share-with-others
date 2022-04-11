import { Fragment } from "react";
import { useDispatch } from "react-redux";

import { step1Actions } from "../../../../store/slices/step1/step1";

import classes from "./InputCheckbox.module.css";

const InputCheckbox = props => {
  const dispatch = useDispatch();
  const { data } = props;

  const onChangeHandler = e => {
    e.preventDefault();
    const type = e.target.type;
    const name = e.target.name;
    const value = type === "checkbox" ? e.target.checked : e.target.value;
    const change = { name, value };
    dispatch(step1Actions.add(change));
  };

  return (
    <div className={classes.Wrapper}>
      <Fragment>
        {Object.entries(data).map(element => {
          const key = element[0];
          const value = element[1];
          const inputLabel = key.replace("-", " ");
          let inputType = key === "other-things" ? "text" : "checkbox";
          const wrapperClass =
            inputType === "checkbox"
              ? classes.InputWrapper
              : classes.TextInputWrapper;
          const inputClass =
            inputType === "checkbox" ? classes.Input : classes.TextInput;
          const labelClass =
            inputType === "checkbox" ? classes.Label : classes.TextLabel;
          return (
            <div className={wrapperClass} key={key}>
              <input
                type={inputType}
                name={key}
                defaultChecked={value}
                defaultValue={value}
                onInput={onChangeHandler}
                className={inputClass}
              />
              <label className={labelClass} htmlFor={key}>
                {inputLabel}
              </label>
            </div>
          );
        })}
      </Fragment>
    </div>
  );
};

export default InputCheckbox;
