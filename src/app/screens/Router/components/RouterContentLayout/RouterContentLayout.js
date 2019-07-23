// @flow

import React from "react";
import NavBar from "../../../../components/NavBar/NavBar";
import { type Node } from "react";

type Props = {
  /** the child components */
  children: Node
};

/**
 * The Content Layout that adds some general styling and components like NavBar
 */
const RouterContentLayout = ({ children }: Props) => (
  <>
    <NavBar />
    {children}
  </>
);

export default RouterContentLayout;
