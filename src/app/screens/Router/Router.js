// @flow

import React, { Component } from "react";
import values from "lodash/values";
import { Route, Switch, Redirect } from "react-router-dom";
import { ROUTES } from "./Router.config";
import RouterMainLayout from "./components/RouterMainLayout/RouterMainLayout";
import RouterContentLayout from "./components/RouterContentLayout/RouterContentLayout";

type Props = {};

/**
 * The setup of the router
 */
class Router extends Component<Props> {
  render() {
    return (
      <RouterMainLayout>
        <RouterContentLayout>
          <Switch>
            {values(ROUTES).map((item, index) => (
              <Route
                key={index}
                exact
                path={item.path}
                component={item.component}
              />
            ))}
            <Redirect to={ROUTES.ARTICLES_CONTAINER.path} />
          </Switch>
        </RouterContentLayout>
      </RouterMainLayout>
    );
  }
}

export default Router;
