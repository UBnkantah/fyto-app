import HeroHand from "../images/hero-hand.png"
import HeroCard from "../images/hero-card.png"
import "./HomeHero.css"

const HomeHero = () => {
  return (
    <div className="herohome-container">
        <div className="homehero-details container">
            <p>GET 25% OFF NOW</p>
            <h2>Make your life easier with crypto</h2>
            <button>Start now</button>
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
            {/* <div className="homehero-card"> */}
                <img src={HeroCard} alt="" />
            {/* </div> */}
            {/* <div className="homehero-hand"> */}
                <img src={HeroHand} alt="" />
            {/* </div> */}
        </div>

    </div>
  )
}

export default HomeHero