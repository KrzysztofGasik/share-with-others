import { useState } from "react";

import Button from "../../UI/Button/Button";
import Fundations from "./Fundations";
import Organizations from "./Organizations";
import LocalFunds from "./LocalFunds";
import decoration from "../../../assets/decoration.png";

import classes from "./Funds.module.css";

const Funds = () => {
  const [selectedOrganization, setSelectedOrganization] = useState(Fundations);
  const [selectedOrganizationName, setSelectedOrganizationName] =
    useState("Fundation's");
  const [toggleClass, setToggleClass] = useState(false);

  const selectedHandler = (org, name) => {
    setToggleClass(true);
    setSelectedOrganization(org);
    setSelectedOrganizationName(name);
    setTimeout(() => {
      setToggleClass(false);
    }, 200);
  };
  return (
    <section className={classes.Wrapper}>
      <span className={classes.Title}>Who are we helping?</span>
      <img src={decoration} alt="decoration" className={classes.Image} />
      <div className={classes.Buttons}>
        <Button
          text="Foundations"
          onClick={() => selectedHandler(Fundations, "Fundation's")}
        />
        <Button
          text="NGO's"
          onClick={() => selectedHandler(Organizations, "NGO's")}
        />
        <Button
          text="Local fundraisers"
          onClick={() => selectedHandler(LocalFunds, "Local funds")}
        />
      </div>
      <p className={classes.Overview}>
        In our database you will find a list of verified Foundations with whom
        we cooperate. You can check what they do, who they help and what they
        need.
      </p>
      <p className={classes.SelectedOrganization}>{selectedOrganizationName}</p>
      <div
        className={
          toggleClass
            ? `${classes.ListWrapper} ${classes.Transition}`
            : classes.ListWrapper
        }
      >
        {selectedOrganization.map((val) => {
          return (
            <div className={classes.List} key={val.name}>
              <div className={classes.LeftColumn}>
                <h3 className={classes.LeftColumnTitle}>{val.name}</h3>
                <p className={classes.LeftColumnText}>Aim: {val.aim}</p>
              </div>
              <div className={classes.RightColumn}>
                <p className={classes.RightColumnText}>{val.gifts}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Funds;
