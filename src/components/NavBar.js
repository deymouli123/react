import React from 'react';
// import reactDom from 'react-dom';
import './../css/NavBar.css';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { navigateContactPage, navigateAboutPage, navigateHomePage , openLoginForm, closeLoginForm, openSignupForm, closeSignupForm} from '../redux';
// import Button from "@material-ui/core/Button";

function NavBar(props) {
  return (


    <div className="nav">
      <span>
        {/*<a className="active" href="#"><LoginForm></LoginForm></a>*/}
        <a className="active" href="#"><button onClick={props.openSignupForm}>Sign Up</button></a>
        <a className="block" href="#"><button onClick={props.openLoginForm}>Login</button></a>
        <a onClick={props.navigateContactPage} href="#">Contact Us</a>
        <a onClick={props.navigateAboutPage} href="#">About Us</a>
        <a href="#">Schools </a>
        <a onClick={props.navigateHomePage} href="#">Home</a>
        <a className='pro' img src='./images/promoralogo.png' width={30} height={30} href='#'></a>
      </span>
      <LoginForm/>
      <SignupForm/>
    </div>

                                                  

  );

}
const mapStateToProps = state => {
  return {
    page: state.page,
    showLoginForm: state.showLoginForm,
    showSignupForm: state.showSignupForm
  }
}
const mapDespatchToProps = dispatch => {
  return {
    navigateHomePage: () => dispatch(navigateHomePage()),
    navigateContactPage: () => dispatch(navigateContactPage()),
    navigateAboutPage: () => dispatch(navigateAboutPage()),
    openLoginForm: () => dispatch(openLoginForm()),
    closeLoginForm: () => dispatch(closeLoginForm()),
    openSignupForm: () => dispatch(openSignupForm()),
    closeSignupForm: () => dispatch(closeSignupForm())
  }
}

export default connect
  (mapStateToProps, mapDespatchToProps)
  (NavBar)