import AnitaImg from "../images/anita-gold.png"
import {FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa"
import "./ContactCom.css"


const ContactCom = () => {
  return (
    <div className="container contact-box">
        <div className="contact-heading">
            <p>OUR TEAM</p>
            <h1>Meet our crypto experts</h1>
            <p>Our company was founded in 2020. We work daily to become better and we are ready to share best practices.</p>
        </div>
        <div className="contacts-container">
            <div className="flex-contact">
                <div className="flex-img">
                    <img src={AnitaImg} alt="" />
                </div>
                <div className="member-details">
                    <h2>Anita Gold</h2>
                    <p>Senior Consultant</p>
                    <div className="flex-socials">
                        <div className="social-icon">
                            <FaFacebookF />
                        </div>
                        <div className="social-icon">
                            <FaTwitter />
                        </div>
                        <div className="social-icon">
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactCom