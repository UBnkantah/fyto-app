import cptHeroImg from "../images/cyp-hero.png"
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
    </>
    
  )
}

export default cptHero