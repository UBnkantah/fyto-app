import {FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa"
import { teamembers } from "../Data/Data"
import "./ContactCom.css"


const ContactCom = () => {
  return (
    <div className="container contact-box">
        <div className="contact-heading">
            <p className="main-header-color">OUR TEAM</p>
            <h2 className="sub-sns-header">Meet our crypto experts</h2>
            <p>Our company was founded in 2020. We work daily to become better and we are ready to share best practices.</p>
        </div>
        <div className="contacts-container">
            {teamembers.map((member) => {
                return(
                    <div className="flex-contact" key={member.id}>
                        <img src={member.img} alt="" />
                        <div className="member-details">
                            <h2>{member.name}</h2>
                            <p>{member.title}</p>
                            <div className="flex-socials">
                                <div className="social-icons">
                                    <FaFacebookF
                                        size={20}
                                        className="member-icon"
                                    />
                                </div>
                                <div className="social-icons">
                                    <FaTwitter 
                                        size={20}
                                        className="member-icon"
                                    />
                                </div>
                                <div className="social-icons">
                                    <FaInstagram 
                                        size={20}
                                        className="member-icon"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            
        </div>
    </div>
  )
}

export default ContactCom