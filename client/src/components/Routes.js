import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminView from "./adminView/AdminView";
import CampusView from "./campusView/CampusView";
import FrontPage from "./frontPage/FrontPage";
import Login from "./login/Login";
import StudentView from "./studentView/StudentView";


const Routes = () => (
  <Switch>
    <Route exact path="/" component={FrontPage} />
    <Route exact path="/LoginPage" component={Login} />
    <Route exact path="/AdminView" component={AdminView} />
    <Route exact path="/CampusView" component={CampusView} />
    <Route exact path="/StudentView" component={StudentView} />
  </Switch>
);

export default Routes;
