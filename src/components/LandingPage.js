import React from 'react';
// import logo from './../logo.svg';
import './../App.css';
import './../css/LandingPage.css';
import NavBar from './NavBar';
// import IconButton from '@material-ui/core/IconButton';
// import InputBase from '@material-ui/core/InputBase';
// import SearchIcon from '@material-ui/icons/Search';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';



function LandingPage() {

  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     position: "relative",
  //     top: "10%",
  //     left: "14%",
  //     paddingLeft: "10px",
  //     backgroundColor: "rgb(47, 152, 212)"
  //     // right: "-100%",
  //     // transform: "translate(-50% -50%)"
  //   },
  //   input: {
  //     // textEmphasisColor: "#151983",
  //     color:"#151983",
  //     fontSize: "25px",
  //     // marginLeft: theme.spacing(1),
  //     // flex: 1,

  //     '&::placeholder': {
  //       fontStyle: 'italic',
  //       color:"#0A61AE",
  //     },

  //   },
  //   iconButton: {
  //     color: "#0A61AE",
  //     // padding: 10,
  //     // fontSize: "80px",
  //     // color: blue,
  //   },
  //   // divider: {
  //   //   height: 28,
  //   //   margin: 4,
  //   // },
  // }));

  // const classes = useStyles();

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

        <div className="head1">
          <h1>Find Best School For Your Kid</h1>
        </div>
        <div className="head2">
          <h3>Explore various schools and choose best among them</h3>
        </div>
        <div className="search">

          {/* <Paper component="form" className={classes.root} Style={{marginLeft:"2px"}}>
        
          <InputBase
            className={classes.input}
            placeholder="Search Schools"
            variant="outlined"
            inputProps={{ style: {
            boxSizing: "border-box",
            
            color: '#0A61AE'
          }  }}
          />
          <IconButton type="submit" className={classes.iconButton}  aria-label="search" variant="outlined">
            <SearchIcon variant="outlined"/>
          </IconButton>

        

        </Paper> */}



          <input type="text" name="box" placeholder="Search Schools" />
          <a className="sbtn" href="#"><i className="fas fa-search" style={{ fontSize: 30 }}></i></a>
        </div>

        <div>
          <img src="./images/kids.png" style={{ width: "600px", marginLeft: "auto", marginRight: "10px", position: "absolute", top: "50px", right: "40px" }} />
        </div>

      </header>



    </div>

  );
}

export default LandingPage;
