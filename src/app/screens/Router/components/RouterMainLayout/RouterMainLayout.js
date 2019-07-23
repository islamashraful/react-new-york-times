// @flow

import React, { PureComponent } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { type Node } from "react";

type Props = {
  /** the child components */
  children: Node
};

/**
 * The Main layout, provides a consistent, and simple baseline
 */
class RouterMainLayout extends PureComponent<Props> {
  render() {
    const { children } = this.props;
    return <CssBaseline>{children}</CssBaseline>;
  }
}

export default RouterMainLayout;
