// @flow

import React from "react";
import { withStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import capitalized from "lodash/capitalize";
import { SortType } from "../../../../utils/sortConst";

type Props = {
  /** Classes attached with the component */
  classes: Object,
  /** Selected search by option */
  sortBy: $Values<typeof SortType>,
  /** Function to call when dropdown value change */
  onChangeDropdownValue: Function,
  /** Function to call when input value change */
  onChnageInputValue: Function
};

const styles = {
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  },
  select: {
    paddingLeft: 10,
    "& div": {
      "&:focus": { backgroundColor: "#fff" }
    },
    "&:before": {
      borderBottom: "none"
    }
  }
};

/**
 * Search Bar component
 * Notify parent component with search and sort selection by raising events
 */
const SearchBar = (props: Props) => {
  const { classes, sortBy, onChangeDropdownValue, onChnageInputValue } = props;
  const { root, input, divider, iconButton, select } = classes;

  return (
    <Paper className={root}>
      <InputBase
        className={input}
        placeholder="Search Articles"
        inputProps={{ "aria-label": "Search Articles" }}
        onChange={e => {
          onChnageInputValue(e.target.value);
        }}
      />
      <IconButton className={iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
      <Divider className={divider} />
      <Select
        value={sortBy}
        className={select}
        onChange={e => {
          onChangeDropdownValue(e.target.value);
        }}
      >
        {Object.keys(SortType).map(key => (
          <MenuItem key={SortType[key]} value={SortType[key]}>
            {capitalized(SortType[key])}
          </MenuItem>
        ))}
      </Select>
    </Paper>
  );
};

export default withStyles(styles)(SearchBar);
