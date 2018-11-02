import React from "react";
import { Router, Route, IndexRoute, Redirect, hashHistory } from "react-router";

import AuthOrApp from "../Containers/authOrApp/authOrApp";
import Dashboard from "../Containers/dashboard/dashboard";
import BillingCycles from "../Containers/billingCycles/billingCycles";

const Routes = props => (
  <Router history={hashHistory}>
    <Route path="/" component={AuthOrApp}>
      <IndexRoute component={Dashboard} />
      <Route path="billingCycles" component={BillingCycles} />
    </Route>
    <Redirect from="*" to="/" />
  </Router>
);

export default Routes;
