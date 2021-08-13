import React from 'react'
import { ImageURL } from '../../constants/data'
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between'
    }

});


export const MidSection = () => {
    const classes = useStyles();
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return (
        <>
            <Box className={classes.wrapper}> 
        {
            ImageURL.map(image => (
                <img  src={image} alt="" style={{width: '33%'}}/>
            ))
        }
            
          </Box>

          <img src={coronaURL} alt=""  style={{width: '100%', marginTop: 20}}/>

        </>
    )
}
