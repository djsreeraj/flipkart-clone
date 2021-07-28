import React from "react";
import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  login: {
    background: "#fff",
    color: "#2874f0",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 2,
    padding: "5px 40px",
    margin: "7px",
    boxShadow: "none",
  },
  wrapper: {
    display: "flex",
    margin: "0 7% 0 auto",
    fontSize: 12,
    "& > *": {
      marginRight: 50,

      alignItems: "center",
      textDecoration: "none",
      color: "#fff",
    },
  },
  container: {
    display: "flex",
  },
});

export const HeaderButtons = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Link>
        <Button variant="contained" className={classes.login}>
          Login
        </Button>
      </Link>
      <Link>
        <Typography style={{ marginTop: 12 }}> More </Typography>
      </Link>
      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={4} color="secondary">
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{ marginLeft: 12 }}> Cart </Typography>
      </Link>
    </Box>
  );
};
