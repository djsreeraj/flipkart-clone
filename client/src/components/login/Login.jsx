import React from 'react'
import {Dialog, DialogContent, makeStyles, Box, Typography, TextField, Button } from '@material-ui/core';

const useStyle = makeStyles({
    component: {
        height: '70vh',
        width: '90vh'
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height:'70vh',
        backgroundRepeat: 'no-repeat',
        background: '#2874f0',
        width: '40%',
        backgroundPosition: 'center 85%',
        padding: '45px 35px',
        '& > *' : {
            color: '#fff',
            fontWeight: 600
        }
    },
    login : {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *': {
            marginTop: 20
        }
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    loginBtn: {
        textTransform: 'none',
        background: '#FB641B',
        color: '#fff',
        height: 48,
        borderRadius: 2
    },
    requestBtn: {
        textTransform: 'none',
        background: '#fff',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
    },
    createText: {
        textAlign: 'center',
        marginTop:'auto',
        fontSize: 14,
        color: '#2874f0',
        fontWeight: 600,
        cursor: 'pointer'
    }
})
const Login = ({ open , setOpen}) => {

    const classes = useStyle();

    const handleClose = () => {
        setOpen(false);
    }
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
                <Box style={{display: 'flex'}}>
                    <Box className={classes.image}>
                        <Typography variant='h5'>Login</Typography>
                        <Typography style={{marginTop: 20}}>Get access to your Orders, Wishlist and Recommendations</Typography>
                    </Box>

                    <Box className={classes.login}>   
                        <TextField name='username' label='Enter Email / Mobile Number'/>
                        <TextField name='password' label='Enter Password'/>
                        <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy</Typography>
                        <Button variant="contained" className={classes.loginBtn}> Login </Button>
                        <Typography  className={classes.text} style={{textAlign:'center'}}> OR </Typography>
                        <Button varinat="contained" className={classes.requestBtn}> Request OTP</Button>
                        <Typography className={classes.createText}>New to Flipkart? Create an account</Typography>
                    </Box>
                </Box>
            </DialogContent>           
        </Dialog>
    )
}


export default Login;