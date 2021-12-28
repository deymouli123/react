import React from 'react';
// import reactDom from 'react-dom';
import './../css/NavBar.css';

import {connect} from 'react-redux';
import { navigateContactPage, navigateAboutPage, navigateHomePage } from '../redux';

function NavBar(props) {
    return (

         
        <div class="nav">
            <span>
                
                <a className="active" href="#"><button>Sign Up</button></a>
                <a className="block" href="#"><button>Login</button></a>
                <a onClick={props.navigateContactPage} href="#">Contact Us</a>
                <a onClick={props.navigateAboutPage} href="#">About Us</a>
                <a href="#">Schools </a>
                <a onClick={props.navigateHomePage} href="#">Home</a>
                <a className='pro' img src='./images/promoralogo.png'width={30} height={30} href='#'></a>
                
                
            
            </span>
            </div>
        
            
        
    );

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

export default connect
(mapStateToProps,mapDespatchToProps)
(NavBar)