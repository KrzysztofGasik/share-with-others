import { useDispatch } from "react-redux";

import { step4Actions } from "../../../../store/slices/step4/step4";

import classes from "./InputAddress.module.css";

const InputAddress = ({ label, register, required, defaultValue, pattern }) => {
  const dispatch = useDispatch();

  const onChangeHandler = e => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    const change = { name, value };
    dispatch(step4Actions.add(change));
  };

  // const now = new Date().toISOString().split("T")[0];

  let tomorrow = new Date();
  tomorrow.setTime(tomorrow.getTime() + 24 * 60 * 60 * 1000);

  return (
    <div className={classes.InputWrapper}>
      <input
        className={classes.Input}
        onInput={onChangeHandler}
        defaultValue={defaultValue}
        type={label === "date" ? "date" : "text"}
        min={label === "date" ? tomorrow.toISOString().split("T")[0] : undefined}
        {...register(label, { required, pattern })}
      />
      <label className={classes.Label} htmlFor={label}>
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </label>
    </div>
  );
};

export default InputAddress;
