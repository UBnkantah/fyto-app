import "./CryWhyUs.css"
import whyUsImg from "../images/whyUs-img.png"

const CryWhyUs = () => {
  return (
    <div className="container whyUs-container">
        <div className="cryWys-details">
            <p>WHY US</p>
            <h2>We got everything you need to start trading</h2>
            <p>The Bitcoin and cryptocurrency markets have experienced a surge in volume recently, making it an exciting time to become a trader.</p>
            <p>Top trading platform</p>
            <p>Secure payments</p>
            <p>Easy to start trading</p>
        </div>
        <div className="cryWys-img">
            <img src={whyUsImg} alt="" />
        </div>
    </div>
  )
}

export default CryWhyUs