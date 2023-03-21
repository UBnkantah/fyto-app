import Form from "../Form/Form"
import "./ContactInfo.css"

const ContactInfo = () => {
  return (
    <div className="contact-info-container container">
        <div className="contact-info-details">
            <div className="contact-address">
                <h2>Head Office</h2>
                <p>202 Helga Springs Rd, Crawford, TN 38554</p>
                <p>800.275.8777</p>
                <p>Telegram Support</p>
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
        <div className="cont-form">
            <Form />
        </div>
    </div>
  )
}

export default ContactInfo