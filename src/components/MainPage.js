import React, { Component } from 'react';
import logo from './../logo.svg';
// import './../App.css';

import './../css/MainPage.css';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import School from './School';
import { navigateContactPage, navigateAboutPage, navigateHomePage } from '../redux';
import {connect} from 'react-redux'
//import { render } from 'react-dom';

 

class MainPage extends Component{

  
  render(){
    console.log(this.props);
    if(this.props.page==='LandingPage')
    {
      return (
        <div><LandingPage />

        </div>
      );
    }else if(this.props.page==='AboutPage'){
      return(
        <div><AboutPage />

        </div>
      )
    }else if(this.props.page==='ContactPage'){
      return(
        <div><ContactPage />

        </div>
      )
      }else if(this.props.page==='SchoolPage'){
        return(
          <div><School />
  
          </div>
        )
        }
      else{
      return(
        <div>No Page To Display</div>
      )
    }
  }
}
const mapStateToProps=state=>{
  return{
    page:state.page
  }
}
const mapDespatchToProps=dispatch=>{
  return{
    navigateHomePage:()=>dispatch(navigateHomePage()),
      navigateContactPage:()=> dispatch(navigateContactPage()),
      navigateAboutPage:() => dispatch(navigateAboutPage())
  }
}



export default connect(mapStateToProps,mapDespatchToProps)(MainPage);
