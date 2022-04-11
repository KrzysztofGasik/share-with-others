import classes from"./ContactInput.module.css";

const ContactInput = ({id,type,label,placeholder}) => {
  return (
    <div className={classes.Wrapper}>
      <label htmlFor={id} className={classes.Label}>{label}</label>
      <input
        className={classes.Input}
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default ContactInput;
