import {FaShoppingCart} from "react-icons/fa"
import "./NftAbtItem.css"
import AbtItemImg from "../images/NFT-hero-img.png"

const NftAbtItem = () => {
  return (
    <div className="container nft-abt-item-container">
        <div className="abt-item-details abt-item">
            <p>ABOUT THE ITEM</p>
            <h2>Totally new way to look at ancient art</h2>
            <p>An NFT is a unit of data stored on a digital ledger, called a blockchain, which can be sold and traded. The NFT can be associated with a particular digital or physical asset and a license to use the asset for a specified purpose. NFTs can be traded and sold on digital markets.</p>
            <div>
                <div className="item-info-nft">
                    <p>3000 x 3000</p>
                    <p>Item Size</p>
                </div>
                <div className="item-info-nft">
                    <p>05 Jan, 2022</p>
                    <p>Date of Creation</p>
                </div>
            </div>
            <button>
                <FaShoppingCart />
                Place a bid
            </button>
        </div>
        <div className="abt-item-img abt-item">
            <img src={AbtItemImg} alt="" />
        </div>
    </div>
  )
}

export default NftAbtItem