import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core";

const myStyles = makeStyles((theme) => ({
  search: {
    borderRadius: 2,
    backgroundColor: "#fff",
    marginLeft: 10,
    width: "38%",
    display: "flex",
  },
  searchIcon: {
    padding: 5,
    height: "100%",
    display: "flex",
    color: "blue",
  },
  inputRoot: {
    width: "100%",
  },
  inputInput: {
    fontSize: "revert",
    paddingLeft: 20,
  },
}));

const SearchBar = () => {
  const classes = myStyles();
  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search for products brands and more.."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;
