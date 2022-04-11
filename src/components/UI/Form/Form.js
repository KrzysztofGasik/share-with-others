import classes from "./Form.module.css";

const Form = ({ children, FormFlexStart = false, onSubmit }) => {
  return (
    <form
      className={!FormFlexStart ? classes.Form : classes.FormFlexStart}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default Form;
