import {useState} from 'react'
import {db} from "../../firebase"
import {FaPhoneAlt, FaTelegramPlane, FaMapMarkedAlt} from "react-icons/fa"
import "./ContactInfo.css"

const ContactInfo = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        const {name, value, checked, type} = e.target

        setFormData((prevFormData) => {
            return{
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)

        db.collection("contact").add({
            formData: formData
        }).then(() => {
            alert("Message Sent")
        }).catch((err) => {
            alert(err.message)
        })

        setFormData({
            name: "",
            email: "",
            message: ""
        })
    }
  return (
    <div className="contactInfo-cont container">
        <div className="conInfo-head">
            <p className="main-header-color">GET IN TOUCH</p>
            <h2 className="sub-sns-header">Contact information</h2>
            <p>Our company was founded in 2020. We work daily to become better and we are ready to share best practices.</p>
        </div>
        <div className="contact-info-container">
            <div className="contact-info-details">
                <div className="contact-address">
                    <h2>  Head Office</h2>
                    <p> <FaMapMarkedAlt className='contact-icon' /> 202 Helga Springs Rd, Crawford, TN 38554</p>
                    <p> <FaPhoneAlt className='contact-icon' /> 800.275.8777</p>
                    <p> <FaTelegramPlane className='contact-icon'/> Telegram Support</p>
                </div>
                <div className="contact-openings">
                    <h2>Opening hours</h2>
                    <p>Monday: 8:00 - 17:00</p>
                    <p>Tuesday: 8:00 - 17:00</p>
                    <p>Wednesday: 8:00 - 17:00</p>
                    <p>Thursday: 8:00 - 17:00</p>
                    <p>Friday: 8:00 - 17:00</p>
                    <p>Saturday: 10:00 - 16:00</p>
                    <p>Sunday: CLOSED</p>
                </div>
            </div>
            <div className='form-container'>
                <h3>Send us a message</h3>
                <form action="" onSubmit={handleSubmit} className="form-box">
                    <label htmlFor="">Your name</label>
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label htmlFor="">Your email</label>
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        id=""
                    />
                    <label htmlFor="">Your message</label>
                    <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        id="" cols="30" rows="14"
                    ></textarea>
                    <button type="submit" className='form-button'>SUBMIT</button>
                </form>
            </div>
        </div>
    </div>
    
  )
}

export default ContactInfo