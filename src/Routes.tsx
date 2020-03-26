import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";

export const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </React.Fragment>
  );
};
