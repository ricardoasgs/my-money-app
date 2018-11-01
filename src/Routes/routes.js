import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";

import Dashboard from "../Containers/dashboard/dashboard";
import BillingCycles from "../Containers/billingCycles/billingCycles";

const Routes = props => (
  <Router history={hashHistory}>
    <Route path="/" component={Dashboard} />
    <Route path="/billingCycles" component={BillingCycles} />
    <Redirect from="*" to="/" />
  </Router>
);

export default Routes;
