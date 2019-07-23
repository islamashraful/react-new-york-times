// @flow

import React, { PureComponent } from "react";

type Props = {};

/**
 * Not Found Screen
 * Navigate to this screen when path match for all routes fail
 */
class NotFoundScreen extends PureComponent<Props> {
  render() {
    return <p>Not found screen</p>;
  }
}

export default NotFoundScreen;
