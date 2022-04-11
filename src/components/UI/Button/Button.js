import classes from "./Button.module.css";

const Button = ({ onClick, text, disabled = false, extraClasses="" }) => {
  const buttonClasses = !extraClasses ? classes.Button : `${classes.Button} ${extraClasses}`
  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
