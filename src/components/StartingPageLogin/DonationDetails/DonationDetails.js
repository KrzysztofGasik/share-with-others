import { Link, useHistory } from "react-router-dom";
import { useContext, Fragment } from "react";

import AuthContext from "../../../store/auth-context";
import Button from "../../UI/Button/Button";
import helperFunctions from "../Form/FormHelperFunctions/FormHelperFunctions";
import { FIREBASE_DB_URL } from "../../../firebase.config";

import classes from "./DonationDetails.module.css";
import sumupClasses from "../Form/SumUp/SumUp.module.css";


const DonationDetails = props => {
  const history = useHistory();
  const userId = useContext(AuthContext).user.uid;
  const donationId = props.location.data.id;
  const idFromDB = props.location.data.idFromDB;
  const data = props.location.data;
  const things = helperFunctions.transformStep1(data);
  const bags = Object.values(data.step2);
  const organization = Object.values(data.step3);
  const address = helperFunctions.transformStep4(data, sumupClasses.Title);
  const sumupArray = [things, bags, organization, address];
  const sumupArrayText = [
    "Things you want to share:",
    "Bags:",
    "Organization you want to help:",
    "Address for collecting:"
  ];
  const deleteHandler = async () => {
    const response = await fetch(
      `${FIREBASE_DB_URL}/${userId}/donations/${idFromDB}.json`,
      {
        method: "DELETE"
      }
    );
    const data = await response.json();
    if (data === null) history.push("/your-donations");
  };

  return (
    <div className={classes.Wrapper}>
      <div className={classes.Details}>
        <p className={classes.ID}>Donation id: {donationId}</p>
        <p className={classes.Date}>Created at {data.createdDate} {data.createdTime}</p>
        <ul className={sumupClasses.List}>
          {sumupArray.map((element, index) => {
            return (
              <Fragment key={element}>
                <li className={sumupClasses.ListElement}>
                  <span className={sumupClasses.Title}>
                    {sumupArrayText[index]}
                    <br />
                  </span>
                  {element}
                </li>
                <hr className={sumupClasses.HRLine} />
              </Fragment>
            );
          })}
        </ul>
      </div>
      <div className={classes.Actions}>
        <Button
          text="Delete donation"
          onClick={deleteHandler}
          // className={classes.DeleteButton}
          extraClasses={classes.DeleteButton}
        />
        <Link to="/your-donations" className={classes.Link}>
          Back to donation list
        </Link>
      </div>
    </div>
  );
};

export default DonationDetails;
