import NheroImg from "../images/NFT-hero-img.png"
import "./NFTHero.css"

const NFTHero = () => {
  return (
    <div className="container NFTHero-container">
        <div className="NFTHero-details">
          <p className="main-header-color">GET NEW ITEM NOW</p>
          <h1 className="hero-sns-header nhtop">Add Value to your collection</h1>
          <p>Buy the new super rare piece of digital art and make your own collection more valuable!</p>
          <button className="home-pg-button">Place a bid</button>
          <p>Secure payments powered by Toka</p>
        </div>
        <div className="NFTHero-img nftAnimate">
          <img src={NheroImg} alt="" />
          <h2>Pixel hand</h2>
          <p>Toka#84592</p>
        </div>
    </div>
  )
}

export default NFTHero