import React from 'react';


function Dashboard(){
    return(
        <input type="checkbox" id="check" />

    <header>
        <label for="check">
            <span><i class="fas fa-bars" id="sidebar_btn"></i></span>
        </label>
        
        <div class="left_area">
             <h3>Pro<span>mora</span></h3>
        </div>
        <div class="right_area">
            <a href="#" class="logout_btn">Logout</a>
        </div>     
    </header>

     
    <div class="sidebar">
        <div class="profile_info">
            <img src="../img/promora_logo.png" class="profile_image" alt="">
        </div>
        <a href="#"><i class="fa fa-desktop" ></i><span>Dashboard</span></a>
        <a href="#"><i class=" fas fa-users-cog"></i><span>Admin</span></a>
        <a href="#"><i class="fa fa-chalkboard-teacher"></i><span>Teacher</span></a>
        <a href="#"><i class="fa fa-user-graduate"></i><span>Student</span></a>
        <a href="#"><i class="fas fa-book-reader"></i><span>Courses</span></a>
        <a href="#"><i class="fas fa-book-open"></i><span>Test</span></a>
    </div>
    <div class="content"></div>
    )
}

export default Dashboard;