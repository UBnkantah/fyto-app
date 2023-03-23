import "./NftCollCon.css"
import AntiqueBust from "../images/antique-bust.png"
import VintageMonitor from "../images/vintage-monitor.png"
import PiggyBank from "../images/piggy-bank.png"
import MrMonkey from "../images/mr-monkey.png"
import DigitalHourGlass from "../images/digital-hourglass.png"
import { Link } from "react-router-dom"

const NftCollCon = () => {
  return (
    <div className="container ">
        <div>
            <p>COLLECTIONS</p>
            <p>Discover more artwork</p>
            <p>Check out my latest creative NFT</p>
        </div>
        <div className="nft-collection-cont">
            <div className="collect-nft-left">
                <div className="collect-nft-lt-top collect">
                    <img src={AntiqueBust} alt="" />
                    <h2>Antique bust</h2>
                    <p>Toka #84592</p>
                </div>
                <div className="collect-nft-lt-btm collect">
                    <img src={VintageMonitor} alt="" />
                    <h1>Vintage Monitor</h1>
                    <p>Toka #84592</p>
                </div>
            </div>
            <div className="coll-nft-rgt">
                <div className="collect-nft-rt-top collect">
                    <img src={PiggyBank} alt="" />
                    <h2>Piggy Bank</h2>
                    <p>Toka #84592</p>
                </div>
                <div className="coll-nft-below">
                    <div className="collect-nft-btm-lt collect-sm">
                        <img src={MrMonkey} alt="" />
                        <h2>Mr. Monkey</h2>
                        <p>Toka #84592</p>
                    </div>
                    <div className="collect-nft-btm-rgt collect-sm">
                        <img src={DigitalHourGlass} alt="" />
                        <h2>Digital hourglass</h2>
                        <p>Toka #84592</p>
                    </div>
                </div>
                
            </div>
        </div>
        <Link to="/contact">View all artworks</Link>
    </div>
  )
}

export default NftCollCon