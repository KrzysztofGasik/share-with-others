import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Page1 from "../Form/Page1/Page1";
import Page2 from "../Form/Page2/Page2";
import Page3 from "../Form/Page3/Page3";
import Page4 from "../Form/Page4/Page4";
import SumUp from "../Form/SumUp/SumUp";
import ThankYou from "../Form/ThankYou/ThankYou";
import InfoBarLogin from "../InfoBar/InfoBarForLogin";

import classes from "./StartForm.module.css";

const StartForm = () => {
  return (
    <Router>
      <Switch>
        <Route path="/start">
          <InfoBarLogin step={0} />
          <Link to="/form/page1" className={classes.Link}>
            Start donation
          </Link>
        </Route>
        <Route path="/form/page1">
          <Page1 />
        </Route>
        <Route path="/form/page2">
          <Page2 />
        </Route>
        <Route path="/form/page3">
          <Page3 />
        </Route>
        <Route path="/form/page4">
          <Page4 />
        </Route>
        <Route path="/form/sumup">
          <SumUp />
        </Route>
        <Route path="/form/thank-you">
          <ThankYou />
        </Route>
      </Switch>
    </Router>
  );
};

export default StartForm;
