import classes from "./Input.module.css";

const Input = ({ id, label, type, placeholder,inputref,value }) => {
  return (
    <div className={classes.Wrapper}>
      <label htmlFor={id} className={classes.Label}>
        {label}
      </label>
      <input
        className={classes.Input}
        type={type}
        id={id}
        placeholder={placeholder}
        ref={inputref}
        defaultValue={value}
      />
    </div>
  );
};

export default Input;
