import { Fragment } from "react";
import { useDispatch } from "react-redux";

import { step3Actions } from "../../../../store/slices/step3/step3";

import classes from "./InputSelect.module.css";

const FormInputSelect = props => {
  const { data, inputData } = props;
  const dispatch = useDispatch();

  const onChangeHandler = e => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    const change = { name, value };
    dispatch(step3Actions.add(change));
  };

  return (
    <div className={classes.Wrapper}>
      <Fragment>
        {Object.entries(data).map(element => {
          const key = element[0];
          const value = element[1];
          return (
            <div className={classes.InputWrapper} key={key}>
              <select
                onChange={onChangeHandler}
                name={key}
                defaultValue={value}
                className={classes.InputSelect}
              >
                <option disabled>
                  --select organization--
                </option>
                {inputData.map(data => (
                  <option key={data}>{data}</option>
                ))}
              </select>
            </div>
          );
        })}
      </Fragment>
    </div>
  );
};

export default FormInputSelect;
