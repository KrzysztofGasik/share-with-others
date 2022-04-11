import { useState, useCallback, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../../store/auth-context";
import DonationElement from "../DonationElement/DonationElement";

import classes from "./DonationsList.module.css";

const DonationsList = () => {
  const [donations, setDonations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const userId = useContext(AuthContext).user.uid;

  const fetchDonations = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://share-with-other-users-db-default-rtdb.firebaseio.com/${userId}/donations.json`
      );
      if (!response.ok) throw new Error("Something went wrong");
      const data = await response.json();
      const donations = [];
      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          const element = data[key];
          donations.push({
            id: element.id,
            idFromDB: key,
            createdDate: element.created ? element.created.split(" / ")[0] : "",
            createdTime: element.created ? element.created.split(" / ")[1] : "",
            step1: element.step1,
            step2: element.step2,
            step3: element.step3,
            step4: element.step4,
          });
        }
      }
      setDonations(donations);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [userId]);

  useEffect(() => {
    fetchDonations();
    return () => {};
  }, [fetchDonations]);

  return (
    <section>
      {error && <p>{error}</p>}
      {isLoading && <p className={classes.Loading}>Loading donations...</p>}
      <div className={classes.Wrapper}>
        <div className={classes.GridHeaders}>
          <h3>Donation Id</h3>
          <h3>Donation submited (date)</h3>
          <h3>Donation submited (time)</h3>
        </div>
        {donations.length > 0 &&
          donations.map((donation) => (
            <Link
              to={{
                pathname: `/your-donations/${donation.id}`,
                data: donation,
              }}
              key={donation.id}
              className={classes.Link}
            >
              <DonationElement data={donation} />
            </Link>
          ))}
      </div>
    </section>
  );
};

export default DonationsList;
