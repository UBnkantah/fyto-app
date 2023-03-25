import HeroHand from "../images/hero-hand.png"
import HeroCard from "../images/hero-card.png"
import "./HomeHero.css"

const HomeHero = () => {
  return (
    <div className="herohome-container">
        <div className="homehero-details container">
            <p className="main-header-color">GET 25% OFF NOW</p>
            <h2 className="hero-sns-header">Make your life easier with crypto</h2>
            <button className="home-pg-button">Start now</button>
            <div className="hme-btm-sect">
                <div className="hme-2k-lt">
                    <p>2K+ ACTIVE USERS</p>
                </div>
                <div className="hme-2k-lt">
                    <p>20k+ WALLET USERS</p>
                </div>
            </div>
        </div>
        <div className="homehero-details">
                <img src={HeroCard} alt="" className="nftAnimate" />
                <img src={HeroHand} alt="" />
        </div>

    </div>
  )
}

export default HomeHero