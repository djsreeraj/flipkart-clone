import React from "react";
import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

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
      <Button variant="contained" className={classes.login}>
        Login
      </Button>
      <Typography style={{ marginTop: 12 }}> More </Typography>
      <Box className={classes.container}>
        <Badge badgeContent={4} color="secondary">
          <ShoppingCartIcon />
        </Badge>

        <Typography style={{ marginLeft: 12 }}> Cart </Typography>
      </Box>
    </Box>
  );
};
