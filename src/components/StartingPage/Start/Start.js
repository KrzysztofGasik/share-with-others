import { Link } from "react-router-dom";

import decoration from "../../../assets/decoration.png";

import classes from "./Start.module.css";

const Start = () => {
  return (
    <div className={classes.Wrapper}>
      <div className={classes.Grid}>
        <p className={classes.Paragraph}>Start helping, it's very simple!</p>
        <p className={classes.Paragraph}>Donate to people</p>
        <img src={decoration} alt="decoration" />
          <Link to="/login" className={classes.Link}>
            Organize donation
          </Link>
      </div>
    </div>
  );
};

export default Start;
