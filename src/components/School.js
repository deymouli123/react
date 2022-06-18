import React from "react";
import SchoolGalleryPage from "./SchoolGalleryPage";
// import ProfileGalleryPage from "./ProfileGalleryPage";

function School() {

    // gotoSchoolGallery=()=> {
    //     let path = `SchoolGalleryPage`;
    //     let history = useHistory();
    //     history.push(path);

    return (
        <div className="abc">
            <SchoolGalleryPage />
            {/*<ProfileGalleryPage />*/}

        </div>
    )
}

export default School;