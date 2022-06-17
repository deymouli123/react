import React from "react";
import HomeBar from "./HomeBar";
import './../css/SchoolGalleryPage.css';
import SideNavBar from "./SideNavBar";


function SchoolGalleryPage() {
    return (

        <div>
            <HomeBar />
            <div className="con1">
                <img src="./images/hcover.jpeg"></img>
                
            </div>
            <div className="pos">
                <img src="./images/logo1.jpg"></img>
                <h2><b>Holy Mother English School</b></h2>
                <h3>@school name</h3>
                <button>Message</button>

            </div>
            <div className="con2">
                <hr />
                <SideNavBar />

            </div>
            <div className="con3">
                <h4><b>Gallery</b></h4>
            </div>
            <div className="con4">
                <button>Photos</button>
                <button>Campous Tour</button>
                <button>Albums</button>
            </div>
            <div className="con5">
            <img src="./images/2.jpg"></img>
            <img src="./images/bg1.jpg"></img>
            <img src="./images/prize.jpg"></img>
            <img src="./images/game.jpg"></img>
            <img src="./images/song.jpg"></img>
            <img src="./images/2.jpg"></img>
            <img src="./images/xmas.jpg"></img>
            <img src="./images/trip.jpg"></img>
            <img src="./images/prize.jpg"></img>

            </div>
        </div>
    )
}
export default SchoolGalleryPage;