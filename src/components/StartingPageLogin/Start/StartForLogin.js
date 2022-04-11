import decoration from "../../../assets/decoration.png";

import classes from "./StartForLogin.module.css";

const Steps = [
  {
    stepNumber: "1",
    stepText: "Select clothes"
  },
  {
    stepNumber: "2",
    stepText: "Decide whom to help"
  },
  {
    stepNumber: "3",
    stepText: "Select organization"
  },
  {
    stepNumber: "4",
    stepText: "Courier will pickup items"
  }
];

const StartForLogin = () => {
  return (
    <div className={classes.Wrapper}>
      <div className={classes.Grid}>
        <p className={classes.Paragraph}>Start helping, it's very simple!</p>
        <p className={classes.Paragraph}>Donate to people</p>
        <img src={decoration} alt="decoration" />
        <div className={classes.StepWrapper}>
          {Steps.map(step => {
            return (
              <div className={classes.Step} key={Number(step.stepNumber)}>
                <div className={classes.StepNumberText}>
                  <p className={classes.StepNumber}>{step.stepNumber}</p>
                  <p className={classes.StepText}>{step.stepText}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StartForLogin;
