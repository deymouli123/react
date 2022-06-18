import React from 'react';
import './../css/HomeBar.css';
import AddAlertIcon from '@material-ui/icons/AddAlert';


function HomeBar() {
    return (


        <div class="nav">
            <span>
                <a href="#">You</a>
                <a href="#">Notifications</a>
                <a href="#">Institutes</a>
                <a href="#">School Buddies</a>
                <a href='#' className='pro' img src='./images/promoralogo.png'></a>

            </span>
        </div>



    )

}
export default HomeBar; 