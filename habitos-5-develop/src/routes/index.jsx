import { Switch, Route } from "react-router";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";
import {Signup} from "../pages/signup"

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};
