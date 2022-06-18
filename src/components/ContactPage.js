import React, { useState } from "react";
import NavBar from "./NavBar";
import './../css/ContactPage.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import EmailIcon from '@material-ui/icons/Email';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import WorkIcon from '@material-ui/icons/Work';
import InstagramIcon from '@material-ui/icons/Instagram';

function ContactPage() {
	const [fName, setfName] = useState("");
	const [sName, setsName] = useState("");
	const [Email, setEmail] = useState("");
	const [PhNo, setPhNo] = useState("");
	const [query, setQuery] = useState("");

	const HandleSubmit = (evt) => {
		evt.preventDefault();
		alert(`Submitting Name ${fName + sName}`)
		console.log(fName + " " + sName + " " + PhNo + " " + Email + " " + query);
		setEmail("");
		setPhNo("");
		setfName("");
		setPhNo("");
		setQuery("");
		setsName("");
	}

	return (
		<div className="App">
			<NavBar />
			<section>
				<h1>Contact Us</h1>
				<div class="container">
					<div class="ContactInfo">
						<div>
							<h2>Contact Info</h2>
							<ul class="info">
								<li>
									<span><LocationCityIcon style={{ fontSize: 30 }} /></span>
									<span>Admin Update</span>
								</li>
								<li>
									<span><EmailIcon style={{ fontSize: 30 }} /></span>
									<span><a href="mailto:promora07@gmail.com">promora07@gmail.com</a></span>
								</li>
								<li>
									<span><ContactPhoneIcon style={{ fontSize: 30 }} />  </span>
									<span><a href="tel:+9179800 72892">(91) 7980072892</a></span>
								</li>
								<li>
									<span><WhatsAppIcon alt="whats app" style={{ fontSize: 30 }} /></span>
									<span><a href="tel:+917980072892">(91) 7980072892</a>
										<a href="tel:+918240346055">(91) 8240346055</a>
									</span>
								</li>
								<li>
									<span><WorkIcon alt="Working Hours" style={{ fontSize: 30 }} /></span>
									<span>Working Hours : 10:00 am - 07:00 pm
										Working Days : Monday to Friday </span>
								</li>
							</ul>
						</div>
						<div class="FollowUs">
							<h3>Follow Us On :</h3>
							<ul class="sci">
								<li><a href="https://www.facebook.com/promora07/" target="_blank" rel="noreferrer"><FacebookIcon style={{ fontSize: 30 }} /></a></li>
								<li><a href="https://twitter.com/promora07/likes?s=09" target="_blank" rel="noreferrer"><TwitterIcon alt="Twitter" style={{ fontSize: 30 }} /></a></li>
								<li><a href="https://www.instagram.com/promora07/" target="_blank" rel="noreferrer"><InstagramIcon alt="Instragram" /></a></li>
								<li><a href="https://www.linkedin.com/company/promora07/" target="_blank" rel="noreferrer"><LinkedInIcon alt="LinkedIn" style={{ fontSize: 30 }} /></a></li>
								<li><a href="https://www.youtube.com/channel/UCElhxb5vK2ZCLd47acg2Owg/featured" target="_blank" rel="noreferrer"><YouTubeIcon alt="YouTube" style={{ fontSize: 30 }} /></a></li>
							</ul>
						</div>
					</div>


					<div class="ContactForm">
						<h2>Share Your Contact Details</h2>
						<form class="formBox" onSubmit={HandleSubmit}>
							<div class="inputBox w50">
								<input type="text" maxlength="25"
									value={fName}
									onChange={e => setfName(e.target.value)} required />
								<span>Name :</span>
							</div>
							<div class="inputBox w50">
								<input type="text" maxlength="25"
									value={sName}
									onChange={e => setsName(e.target.value)}
									required />
								<span>Surname</span>
							</div>
							<div class="inputBox w50">
								<input type="email" maxlength="30"
									value={Email}
									onChange={e => setEmail(e.target.value)}
									required />
								<span>Eamil Id:</span>
							</div>
							<div class="inputBox w50">
								<input type="tel" minlength="10"
									value={PhNo}
									onChange={e => setPhNo(e.target.value)}
									required />
								<span>Mobile Number</span>
							</div>
							<div class="inputBox w100">
								<textarea name="Query" id="Query"
									value={query}
									onChange={e => setQuery(e.target.value)}
									required></textarea>
								<span>Type your query here...</span>
							</div>
							<div class="inputBox w100">
								<input type="submit" value="SUBMIT" ></input>
							</div>

						</form>

					</div>
				</div>
			</section>
		</div>
	)
}

export default ContactPage;