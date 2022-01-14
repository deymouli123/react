import React from 'react';
//import NavBar from "./NavBar";
import { connect } from 'react-redux';

import { navigateContactPage, navigateAboutPage, navigateHomePage, openLoginForm, closeLoginForm, openSignupForm, closeSignupForm } from '../redux';
//import Popup from 'reactjs-popup';

import Dialog from "@material-ui/core/Dialog";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';


function SignupForm(props) {
  return (
      
        <Dialog open={props.showSignupForm} onClose={props.closeSignupForm} style={{width:"100%"}}>
          <DialogTitle>{"Sign Up"}</DialogTitle>
          <DialogContent style={{marginLeft:"70px", width:"70%", height:"400px"}}>
          <Avatar alt="promoralogo" src="../../images/Prolog.jpeg"  style={{marginLeft: "100px", height: "120px", width: "120px"}}/>

          <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Username"
                type="text"
                fullWidth
                variant="outlined"
            />
            
          <TextField
                
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="outlined"
            /> 
           
            <TextField
                margin="dense"
                id="password"
                label="Password"
                type="text"
                fullWidth
                variant="outlined"
            />
            
            <Button variant="contained" color="primary" margin="dense" style={{marginTop:"20px", width:"100%"}}>
              SIGN UP
            </Button>
            <span>Registered? <a href='#' onClick={props.openLoginForm}>Login</a>  </span>

              {/* <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          /> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={props.closeSignupForm}
              color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog >
      
    )

}
const mapStateToProps = state => {
  return {
    page: state.page,
    showSignupForm: state.showSignupForm,
    showLoginForm: state.showLoginForm,
  }
}
const mapDespatchToProps = dispatch => {
  return {
    navigateHomePage: () => dispatch(navigateHomePage()),
    navigateContactPage: () => dispatch(navigateContactPage()),
    navigateAboutPage: () => dispatch(navigateAboutPage()),
    openSignupForm: () => dispatch(openSignupForm()),
    closeSignupForm: () => dispatch(closeSignupForm()),
    openLoginForm: () => dispatch(openLoginForm()),
    closeLoginForm: () => dispatch(closeLoginForm())
  }
}

export default connect
  (mapStateToProps, mapDespatchToProps)(SignupForm)


