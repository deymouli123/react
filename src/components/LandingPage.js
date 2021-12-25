import React from 'react';
// import logo from './../logo.svg';
import './../App.css';
import './../css/LandingPage.css';
import NavBar from './NavBar';

function LandingPage() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <div className="App">
      <NavBar />
      <header>

        <div class="head1">
          <h1>Find Best School For Your Kid</h1>
        </div>
        <div class="head2">
          <h3>Explore various schools and choose best among them</h3>
        </div>
        <div class="search">

          <input type="text" name="box" placeholder="Search Schools" />
          <a className="sbtn" href="#"><i class="fas fa-search" style={{ fontSize: 30 }}></i></a>
        </div>

      </header>


    </div>

  );
}

export default LandingPage;
