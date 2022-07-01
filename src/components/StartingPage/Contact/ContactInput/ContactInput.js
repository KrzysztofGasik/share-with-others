import classes from "./ContactInput.module.css";

const ContactInput = ({ label, register, required, defaultValue ,pattern}) => {
  return (
    <div className={classes.Wrapper}>
      <label className={classes.Label} htmlFor={label}>
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </label>
      <input
        className={classes.Input}
        defaultValue={defaultValue}
        type={label === "email" ? "email" : "text"}
        {...register(label, { required, pattern })}
      />
    </div>
  );
};

export default ContactInput;
