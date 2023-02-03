import React from 'react';
import './contact.css';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_2.jpg';
import {MdEmail} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io';


const Contact = () => {
	return (
		<>
		<Header title="Get In Touch" image={HeaderImage}>
			Fruga itaque ducimus, ad amet praesentium suscipit sit, assumenda nihil officia totam, animi culpa nobis nemo natus doloremque?
		</Header>
		<section className="contact">
			<div className="container contact_container">
				<div className="contact_wrapper">
					<a href="https://outlook.live.com/owa/" target="_blank" rel="noreferrer"><MdEmail/></a>
					<a href="https://www.messenger.com/" target="_blank" rel="noreferrer"><BsMessenger/></a>
					<a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer"><IoLogoWhatsapp/></a>
				</div>
			</div>
		</section>
		</>
)
}

export default Contact;