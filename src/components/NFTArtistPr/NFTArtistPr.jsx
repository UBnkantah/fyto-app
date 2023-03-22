import { Link } from "react-router-dom"
import ArtistImg from "../images/NftArtist.png"
import "./NFTArtistPr.css"

const NFTArtistPr = () => {
  return (
    <div className="container nft-artist-container">
      <div className="nft-artist flex-nft-artist">
        <img src={ArtistImg} alt="" className="nft-artist-img" />
        <div className="nft-artwork-top">
            <img src="" alt="" />
            <p>Pixel Hand</p>
            <p>Toka #84592</p>
        </div>
        <div className="nft-artwork-right">
            <img src="" alt="" />
            <p>Digital hour</p>
            <p>Mark #9834</p>
        </div>
        <div className="nft-artwork-left">
            <img src="" alt="" />
            <p>Mr Monkey</p>
            <p>Betty #09564</p>
        </div>
        
      </div>
      <div className="nft-artist-info flex-nft-artist">
        <p>ABOUT THE ARTIST</p>
        <h2>I create a lot of beautiful things</h2>
        <p>A non-fungible token is a unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable. NFTs can be used to represent items such as photos, videos, audio, and other types of digital files. An NFT is a unit of data stored on a digital ledger, called a blockchain, which can be sold and traded.</p>
        <Link to="/contact">Reach me on Instagram</Link>
      </div>
    </div>
  )
}

export default NFTArtistPr
