import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { useDispatch } from "react-redux";

import { persistor } from "../../../store/index";
import { step1Actions } from "../../../store/slices/step1/step1";
import { step2Actions } from "../../../store/slices/step2/step2";
import { step3Actions } from "../../../store/slices/step3/step3";
import { step4Actions } from "../../../store/slices/step4/step4";
import AuthContext from "../../../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const logout = useContext(AuthContext).logout;
  const isLogin = useContext(AuthContext).isLoggedIn;
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      const awaitLogout = await logout();
      if (awaitLogout) history.push("/");
      localStorage.removeItem("persist:root");
      persistor.purge();
      dispatch(step1Actions.clear());
      dispatch(step2Actions.clear());
      dispatch(step3Actions.clear());
      dispatch(step4Actions.clear());
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <header className={classes.Header}>
      <nav>
        <ul className={classes.NavigationList}>
          {!isLogin && (
            <li className={classes.NavigationElement}>
              <Link to="/signup" className={classes.NavigationAnchor}>
                Sign up
              </Link>
            </li>
          )}
          {!isLogin && (
            <li className={classes.NavigationElement}>
              <Link to="/login" className={classes.NavigationAnchor}>
                Login
              </Link>
            </li>
          )}
          {isLogin && (
            <li className={classes.NavigationElement}>
              <Link
                to="/"
                onClick={logoutHandler}
                className={classes.NavigationAnchor}
              >
                Logout
              </Link>
            </li>
          )}
          {isLogin && (
            <li className={classes.NavigationElement}>
              <Link to="/start" className={classes.NavigationAnchor}>
                Start
              </Link>
            </li>
          )}
          {isLogin && (
            <li className={classes.NavigationElement}>
              <Link to="/profile" className={classes.NavigationAnchor}>
                Profile
              </Link>
            </li>
          )}
          {isLogin && (
            <li className={classes.NavigationElement}>
              <Link to="/your-donations" className={classes.NavigationAnchor}>
                Donations
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
