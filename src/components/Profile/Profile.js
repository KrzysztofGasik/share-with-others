import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import classes from "./Profile.module.css";

const Profile = () => {
  const user = useContext(AuthContext).user;
  return (
    <div className={classes.Wrapper}>
      <h1>
        Welcome user - <strong>{user.email}</strong>
      </h1>
      <p className={classes.NavigationElement}>
        <Link to="/update-profile" className={classes.NavigationAnchor}>
          Update profile
        </Link>
      </p>
    </div>
  );
};

export default Profile;
