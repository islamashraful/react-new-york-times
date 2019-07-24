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
import { SortTypes } from "../../../../utils/sortConst";

type Props = {
  onChangeDropdownValue: Function,
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
  }
};

/**
 * Search Bar component
 * Notify parent component with search and sort selection by raising events
 */
const SearchBar = (props: Props) => {
  const { classes, onChangeDropdownValue, onChnageInputValue } = props;

  //TODO: Change backgroundColor of select

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Articles"
        inputProps={{ "aria-label": "Search Articles" }}
        onChange={e => {
          onChnageInputValue(e.target.value);
        }}
      />
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} />
      <Select
        value="newest"
        onChange={e => {
          onChangeDropdownValue(e.target.value);
        }}
      >
        {Object.keys(SortTypes).map(key => (
          <MenuItem key={SortTypes[key]} value={SortTypes[key]}>
            {capitalized(SortTypes[key])}
          </MenuItem>
        ))}
      </Select>
    </Paper>
  );
};

export default withStyles(styles)(SearchBar);
