import cptHeroImg from "../images/cyp-hero.png"

const cptHero = () => {
  return (
    <div className='container'>
        <div className="cpt-hero-details">
            <p>GET 25% OFF NOW</p>
            <h2>Trusted & secure crypto exchange</h2>
            <p>Trade Bitcoin, Ethereum, USDT and other altcoins using our crypto trading app.</p>
            <button>Get Started</button>
        </div>
        <div className="cpt-hero-img">
            <img src={cptHeroImg} alt="" />
        </div>
    </div>
  )
}

export default cptHero