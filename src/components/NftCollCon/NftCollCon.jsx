import React from 'react'
import AntiqueBust from "../images/antique-bust.png"
import VintageMonitor from "../images/vintage-monitor.png"
import PiggyBank from "../images/piggy-bank.png"
import MrMonkey from "../images/mr-monkey.png"
import DigitalHourGlass from "../images/digital-hourglass.png"

const NftCollCon = () => {
  return (
    <div>
        <div>
            <p>COLLECTIONS</p>
            <p>Discover more artwork</p>
            <p>Check out my latest creative NFT</p>
        </div>
        <div className="nft-collection-cont">
            <div className="collect-nft-left">
                <div className="collect-nft-lt-top">
                    <img src={AntiqueBust} alt="" />
                </div>
                <div className="collect-nft-lt-btm">
                    <img src={VintageMonitor} alt="" />
                </div>
            </div>
            <div className="coll-nft-rgt">
                <div className="collect-nft-rt-top">
                    <img src={PiggyBank} alt="" />
                </div>
                <div className="collect-nft-btm-lt">
                    <img src={MrMonkey} alt="" />
                </div>
                <div className="collect-nft-btm-rgt">
                    <img src={DigitalHourGlass} alt="" />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default NftCollCon