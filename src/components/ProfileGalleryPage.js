import React from "react";
import HomeBar from "./HomeBar";
import './../css/ProfileGalleryPage.css';
import SideNavBar from "./SideNavBar";


function ProfileGalleryPage() {
    return (

        <div>
            <HomeBar />
            <div className="cons1">
                <img src="./images/cov.jpg"></img>
            </div>
            <div className="pos1">
                <img src="./images/ks.jpeg"></img>
                <h2><b>Kunal Shankar</b></h2>
                <h3>@kunalshankar</h3>
                <button>Follow</button>
                <button>Add+</button>

            </div>


            <div className="cons2">
                <hr />
                <SideNavBar />

            </div>
            <div className="cons3">
                <h4><b>My Gallery</b></h4>
            </div>
            <div className="cons4">
                <button>Photos</button>
                <button>Campous Tour</button>
                <button>Albums</button>
            </div>
            <div className="cons5">
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
export default ProfileGalleryPage;