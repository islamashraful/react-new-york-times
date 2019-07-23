// @flow

import React, { Component } from "react";
import values from "lodash/values";
import { Route, Switch, Redirect } from "react-router-dom";
import { ROUTES } from "./Router.config";

type Props = {};

/**
 * The setup of the router
 */
class Router extends Component<Props> {
  render() {
    return (
      <Switch>
        {values(ROUTES).map((item, index) => (
          <Route
            key={index}
            exact
            path={item.path}
            component={item.component}
          />
        ))}
        <Redirect to={ROUTES.ARTICLE_CARDS_CONTAINER.path} />
      </Switch>
    );
  }
}

export default Router;
