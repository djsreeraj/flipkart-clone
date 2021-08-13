import React from "react";
import { Banner } from "./Banner";
import { NavBar } from "./NavBar";
import { Box, makeStyles } from "@material-ui/core";
import { Slide } from "../header/Slide";

const useStyles = makeStyles({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
  rightWrapper:{
      background: '#fff',
      padding: 5,
      margin: '12px 0 0 10px',
      width: '17%'
  }
});

export const Home = () => {
  const classes = useStyles();
  const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';


  return (
    <>
      <NavBar />
      <Box className={classes.component}>
        <Banner />
        <Box style={{display: 'flex'}}>
            <Box style={{ width: '80%'}}>
               <Slide timer={true} title="Deal of the day" />
            </Box>
            <Box className={classes.rightWrapper}>
              <img src={adURL} alt="ads" style={{ width: 230, height: 'auto'}}/>
            </Box>
        </Box>
        <Slide timer={false} title="Offers for you"/>
        <Slide timer={false} title="Suggested items"/>
        <Slide timer={false} title="Top selections"/>  
        <Slide timer={false} title="Best Sellers"/>  
      </Box>
    </>
  );
};
