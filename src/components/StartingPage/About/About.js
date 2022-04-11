import decoration from "../../../assets/decoration.png";
import about from "../../../assets/about.jpg";

import classes from "./About.module.css";

const About = () => {
  return (
    <section className={classes.Wrapper} id="About">
      <div className={classes.Info}>
        <span className={classes.Title}>About us</span>
        <img className={classes.ImageDecoration} src={decoration} alt="decoration" />
        <p className={classes.Description}>
          We are an association that helps organize fundraisers unnecessary
          things. We invite all interested persons to team work.
        </p>
      </div>
      <img src={about} alt="about" className={classes.Image} />
    </section>
  );
};

export default About;
