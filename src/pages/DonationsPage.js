import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DonationsList from "../components/StartingPageLogin/DonationsList/DonationsList";
import DonationDetails from "../components/StartingPageLogin/DonationDetails/DonationDetails";

const DonationsPage = () => {
  return (
    <Router>
      <Switch>
        <Route path="/your-donations" exact component={DonationsList} />
        <Route
          path="/your-donations/:donationId"
          exact
          component={DonationDetails}
        />
      </Switch>
    </Router>
  );
};

export default DonationsPage;
