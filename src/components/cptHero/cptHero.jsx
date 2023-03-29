import cptHeroImg from "../images/cyp-hero.png"
import regKey from "../images/reg-key.png"
import "./cptHero.css"

const cptHero = () => {
  return (
    <>
      <div className='container cpt-hero-container'>
        <div className="cpt-hero-details">
            <p className="main-header-color">GET 25% OFF NOW</p>
            <h2 className="sub-sns-header">Trusted & secure crypto exchange</h2>
            <p>Trade Bitcoin, Ethereum, USDT and other altcoins using our crypto trading app.</p>
            <button className="home-pg-button">Get Started</button>
          </div>
          <div className="cpt-hero-img">
              <img src={cptHeroImg} alt="" />
          </div>
      </div>
      <div className="cpt-hero-btm">
        <div className="flex-cpt-hero">
          <div className="img-cpt-flex">
            <img src={regKey} alt="" />
          </div>
          <div className="details-cpt-flex">
            <h3>Register</h3>
            <p>Download our app and register in 3 minutes</p>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default cptHero