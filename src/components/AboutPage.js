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
                <div className="cont3">
                        <h2>Our relation with you</h2>

                        <p>Promora knows that trust really matters a lot. Thus we have filtered our suggestions as
                            per your need so that you can the get the best out of it.</p>

                    </div>
                    <div className="three">
                        <img src="./images/prize.jpg"></img>
                    </div>
                    <div className="cont4">
                        <h2>Our Mission</h2>
                        <p>To provide social media presence to the educational institutes and to
                            those who are related to education or going to be related to educationin any way.</p>
                    </div>
                    <div className="four">
                        <img src="./images/game.jpg"></img>
                    </div>
                    <div className="cont5">
                        <h2>Our Vision</h2>
                        <p>To create a platform for everyone to learn, earn and explore their queries in the field of education
                            through world-wide network for educational institutes and businesses.</p>
                    </div>
                    <div className="five">
                        <img src="./images/song.jpg"></img>
                    </div>

                </div>
            </header>

        </div>


    )
}

export default AboutPage;
