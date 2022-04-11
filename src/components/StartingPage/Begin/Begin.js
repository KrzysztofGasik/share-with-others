import { Fragment } from "react";
import { Link } from "react-router-dom";

import decoration from "../../../assets/decoration.png";

import classes from "./Begin.module.css";

const BeginContent = [
  {
    step: "1",
    title: "Select clothes",
    info: "clothes, toys etc."
  },
  {
    step: "2",
    title: "Pack them",
    info: "Use plastic bags"
  },
  {
    step: "3",
    title: "Decide whom to help",
    info: "Select organization"
  },
  {
    step: "4",
    title: "Order pickup",
    info: "Courier will pickup items"
  }
];

const Begin = () => {
  return (
    <Fragment>
      <section className={classes.Wrapper} id="Begin" key="BeginBeforeLog">
        <span className={classes.Title}>Follow this 4 simple steps</span>
        <img src={decoration} alt="decoration" className={classes.Image} />
        <div className={classes.Info}>
          {BeginContent.map(value => {
            return (
              <div className={classes.Steps} key={value.step}>
                <p className={classes.Step}>{value.step}</p>
                <p className={classes.TextTitle}>{value.title}</p>
                <hr className={classes.HRLine} />
                <p className={classes.TextInfo}>{value.info}</p>
              </div>
            );
          })}
        </div>
        <Link to="/signup" className={classes.Link}>
          Register now
        </Link>
      </section>
    </Fragment>
  );
};

export default Begin;
