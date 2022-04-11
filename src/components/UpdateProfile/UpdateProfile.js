import { Link } from "react-router-dom";

import UpdateProfileForm from "./UpdateProfileForm/UpdateProfileForm";

import classes from "./UpdateProfile.module.css";

const UpdateProfile = () => {
  return (
    <section className={classes.Overlay}>
      <UpdateProfileForm />
      <Link to="/start" className={classes.Link}>
        Cancel
      </Link>
      <Link to="/" className={classes.Link}>
        Return to homepage
      </Link>
    </section>
  );
};

export default UpdateProfile;
