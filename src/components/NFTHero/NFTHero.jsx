import NheroImg from "../images/NFT-hero-img.png"
import "./NFTHero.css"

const NFTHero = () => {
  return (
    <div className="container NFTHero-container">
        <div className="NFTHero-details">
            <p>GET NEW ITEM NOW</p>
            <h1>Add Value to your collection</h1>
            <p>Buy the new super rare piece of digital art and make your own collection more valuable!</p>
            <button>Place a bid</button>
            <p>Secure payments powered by Toka</p>
        </div>
        <div className="NFTHero-img">
            <div>
                <img src={NheroImg} alt="" />
                <h2>Pixel hand</h2>
                <p>Toka#84592</p>
            </div>
        </div>
    </div>
  )
}

export default NFTHero