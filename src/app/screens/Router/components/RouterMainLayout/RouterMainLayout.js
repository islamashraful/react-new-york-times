// @flow

import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { type Node } from "react";

type Props = {
  /** the child components */
  children: Node
};

/**
 * The Main layout, provides a consistent, and simple baseline
 */
const RouterMainLayout = ({ children }: Props) => (
  <CssBaseline>{children}</CssBaseline>
);

export default RouterMainLayout;
