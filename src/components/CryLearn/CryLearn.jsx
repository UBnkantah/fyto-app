import "./CryLearn.css"
import guideImg from "../images/guide-img.png"
import { lrnCyp } from "../Data/Data"

const CryLearn = () => {
  return (
    <div className='container cryLearn-container'>
        <div className="flex-cryln-head">
            <div className="flex-cryln-head-lt">
                <p>LEARN CRYPTO</p>
                <h2>Watch our crypto trading guide for beginners</h2>
            </div>
            <div className="flex-cryln-head-lt">
                <p>The Bitcoin and cryptocurrency markets have experienced a surge in volume recently, making it an exciting time to become a trader.</p>
                <p>View all Guide</p>
            </div>
        </div>
        <div className="flex-cryln-app">
            <div className="flex-cryln-app-img">
                <img src={guideImg} alt="" />
            </div>
            <div className="flex-cryln-app-details">
                {lrnCyp.map((lrn) => {
                    return (
                        <div className="flex-cryln-app-div" key={lrn.id}>
                            <h2>{lrn.title}</h2>
                            <p>Trade Bitcoin, Ethereum, USDT and other altcoins using our trading app.</p>
                        </div>
                    )
                })}
                
            </div>
        </div>
    </div>
  )
}

export default CryLearn