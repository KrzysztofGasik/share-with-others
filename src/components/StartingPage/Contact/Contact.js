import ContactForm from "./ContactForm/ContactForm";

import decoration from "../../../assets/decoration.png";
import instagram from "../../../assets/insta.png";
import facebook from "../../../assets/fb.png";

import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.Wrapper}>
        <span className={classes.Title}>Contact with us</span>
        <img src={decoration} alt="decoration" />
        <ContactForm />
      </div>
      <div className={classes.Social}>
        <a href="https://www.facebook.com/">
          <img src={facebook} alt="facebook icon" className={classes.Image}/>
        </a>
        <a href="https://www.instagram.com/">
          <img src={instagram} alt="instagram icon" className={classes.ImageLast}/>
        </a>
      </div>
    </footer>
  );
};
export default Contact;
