import React from 'react';
// import reactDom from 'react-dom';
import './../css/NavBar.css';

import {connect} from 'react-redux';
import { navigatePage } from '../redux';

function NavBar(props) {
    return (

         
        <div class="nav">
            <span>
                
                <a className="active" href="#"><button>Sign Up</button></a>
                <a className="block" href="#"><button>Login</button></a>
                <a onClick={props.navigatePage} href="#">Contact Us</a>
                <a onClick={props.navigatePage} href="#">About Us</a>
                <a href="#">Schools </a>
                <a href="#">Home</a>
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
      navigatePage:()=>dispatch(navigatePage())
    }
  }

export default connect
(mapStateToProps,mapDespatchToProps)
(NavBar)