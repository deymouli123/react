import React from "react";
import NavBar from "./NavBar";

import './../css/AboutPage.css';

function AboutPage() {
    return (
        <div className="nav">
            <NavBar />

            <header>
                <h1><u>About us</u></h1>
                <div className="one">
                    <img src="./images/bg1.jpg"></img>
                </div>
                <div className="cont1">
                <p>We believe that the flow of information between the school
                    and the audience should be smooth. So that people can get
                    the required information very easily, about the school for their kids.
                    It will also help the school’s certain record to be stored in an organised
                    manner for a longer period.</p>
                </div>
                <div className="two">
                    <img src="./images/2.jpg"></img>
                </div>
                <div className="cont2">
                <p>
                    What Is PROMORA?<br/>
                    Promora is all about building a bridge in between to fill up the gap.
                    Making strategies to promote on social media, getting the required
                    information and will be passed on by us. Observing school works,
                    trends and challenges, we have thought of solving this problem by
                    developing a platform on social media, by the collection of
                    information from school, mentoring the school for the same &
                    by making it easy to available to the general audience.
                </p>
                </div>
            </header>

        </div>


    )
}

export default AboutPage;
