import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="flex-footer">
            <h2>Toka</h2>
            <p>Reinventing the way of creating websites, we aim to create the most master-peaced WordPress theme available on the market.</p>
        </div>
        <div className="flex-footer">
            <h3>Contact</h3>
            <p>202 Helga Springs Rd, Crawford, TN 38554</p>
            <p>Call Us: 800.275.8777</p>
            <p>alex@company.com</p>
        </div>
        <div className="flex-footer">
            <h3>SIGN UP FOR EMAIL UPDATES</h3>
            <form action=""className="footer-form">
                <input type="email" className="footer-email" placeholder="Your e-mail address" name="" id="" />
                <button type="submit">Subscribe</button>
            </form>
            <p>Sign up with your email address to receive news and updates</p>
        </div>
    </div>
  )
}

export default Footer
