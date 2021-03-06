// @flow

import React from "react";
import styles from "./Pagination.module.scss";
import ReactPagination from "react-js-pagination";

/** Range of pages in paginator */
const pageRange = 5;

type Props = {
  /** Current page */
  currentPage: number,
  /** Total number of items */
  totalItems: number,
  /** Number of items per page */
  itemsPerPage: number,
  /** Function to call when page changed */
  onChange: Function
};

/**
 * Pagination component
 * A wrapper around react-js-pagination
 */
const Pagination = ({
  currentPage,
  itemsPerPage,
  totalItems,
  onChange
}: Props) => {
  return (
    <ReactPagination
      activePage={currentPage}
      itemsCountPerPage={itemsPerPage}
      totalItemsCount={totalItems}
      pageRangeDisplayed={pageRange}
      onChange={onChange}
      innerClass={styles.pagination}
      itemClass={styles.itemClass}
      activeLinkClass={styles.active}
    />
  );
};

export default Pagination;
