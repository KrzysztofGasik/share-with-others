import { Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import StartPage from "./pages/StartPage";
import ProfilePage from "./pages/ProfilePage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import DonationsPage from "./pages/DonationsPage";

function App() {
  const isLoggedIn = useContext(AuthContext).isLoggedIn;
  return (
    <div className="App">
      <Layout>
        <Switch>
          {!isLoggedIn && (
            <Route path="/" exact>
              <HomePage />
            </Route>
          )}
          {!isLoggedIn && (
            <Route path="/signup">
              <SignupPage />
            </Route>
          )}
          {!isLoggedIn && (
            <Route path="/login">
              <LoginPage />
            </Route>
          )}
          {isLoggedIn && (
            <Route path="/start">
              {isLoggedIn && <StartPage />}
              {!isLoggedIn && <Redirect to="/login" />}
            </Route>
          )}
          {isLoggedIn && (
            <Route path="/profile">
              {isLoggedIn && <ProfilePage />}
              {!isLoggedIn && <Redirect to="/login" />}
            </Route>
          )}
          {isLoggedIn && (
            <Route path="/update-profile">
              {isLoggedIn && <UpdateProfilePage />}
              {!isLoggedIn && <Redirect to="/login" />}
            </Route>
          )}
          {isLoggedIn && (
            <Route path="/your-donations">
              {isLoggedIn && <DonationsPage />}
              {!isLoggedIn && <Redirect to="/login" />}
            </Route>
          )}
          <Route path="/forgot-password">
            <ForgotPasswordPage />
          </Route>
          {isLoggedIn ? (
            <Route path="*">
              <Redirect to="/start" />
            </Route>
          ) : (
            <Route path="*">
              <Redirect to="/" />
            </Route>
          )}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
