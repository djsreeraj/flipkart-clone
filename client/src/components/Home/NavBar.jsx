import React from "react";
import { navData } from "../../constants/data";
import { Typography, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  component: {
    display: "flex",
    margin: "55px  130px 0  130px",
    justifyContent: "space-between",
  },
  container: {
    textAlign: "center",
    padding: "12px 8px",
  },
  image: {
    width: 64,
  },
  text: {
    fontSize: 14,
    fontWeight: 600,
  },
});
export const NavBar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.component}>
      {navData.map((item) => (
        <Box className={classes.container}>
          <img src={item.url} alt="" className={classes.image} />
          <Typography className={classes.text}> {item.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};
