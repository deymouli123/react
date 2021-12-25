import React from "react";
import NavBar from "./NavBar";
import './../css/ContactPage.css';

function ContactPage(){
    return(
        <div className="App">
            <section>
		<div class="container">
			<div class="ContactInfo">
				<div>
					<h2>Contact Info</h2>
					<ul class="info">
						<li>
							<span><img src="../img/location.png" alt="lication"></img></span>
							<span>Admin Update</span>
						</li>
						<li>
							<span><img src="../img/mail.png" alt="mail Id"></img></span>
							<span><a href="mailto:promora07@gmail.com">promora07@gmail.com</a></span>
						</li>
						<li>
							<span><img src="../img/call.png" alt="call"></img></span>
							<span><a href="tel:+9179800 72892">(91) 7980072892</a></span>
						</li>
						<li>
							<span><img src="../img/whatsapp.png" alt="whats app"></img></span>
							<span><a href="tel:+917980072892">(91) 7980072892</a>
								 <a href="tel:+918240346055">(91) 8240346055</a>
							</span>
						</li>
						<li>
							<span><img src="../img/work24.png" alt="Working Hours"></img></span>
							<span>Working Hours : 10:00 am - 07:00 pm
								Working Days : Monday to Friday </span>
						</li>
					</ul>
				</div>
				<div class="FollowUs">
					<h3>Follow Us On :</h3>
					<ul class="sci">
						<li><a href="https://www.facebook.com/promora07/" target="_blank"><img src="../img/1.png"
									alt="Facebook"></img></a></li>
						<li><a href="https://twitter.com/promora07/likes?s=09" target="_blank"><img src="../img/2.png"
									alt="Twitter"></img></a></li>
						<li><a href="https://www.instagram.com/promora07/" target="_blank"><img src="../img/3.png"
									alt="Instragram"></img></a></li>
						<li><a href="https://www.linkedin.com/company/promora07/" target="_blank"><img
									src="../img/5.png" alt="LinkedIn"></img></a></li>
						<li><a href="https://www.youtube.com/channel/UCElhxb5vK2ZCLd47acg2Owg/featured"
								target="_blank"><img src="youtube_icon_24.png" alt="YouTube"></img></a></li>
					</ul>
				</div>
			</div>


			<div class="ContactForm">
				<h2>Share Your Contact Details</h2>
				<div class="formBox">
					<div class="inputBox w50">
						<input type="text" maxlength="25" required>
						<span>First Name</span></input>
					</div>
					<div class="inputBox w50">
						<input type="text" maxlength="25" required>
						<span>Last Name</span></input>
					</div>
					<div class="inputBox w50">
						<input type="email" maxlength="30" required>
						<span>Email Address</span></input>
					</div>
					<div class="inputBox w50">
						<input type="tel" minlength="10" required>
						<span>Mobile No</span></input>
					</div>
					<div class="inputBox w100">
						<textarea name="Query" id="Query" required></textarea>
						<span>Type your query here...</span>
					</div>
					<div class="inputBox w100">
						<input type="submit" value="SUBMIT"></input>
					</div>
				</div>

			</div>
		</div>
	    </section>
        </div>
    )
}

export default ContactPage;