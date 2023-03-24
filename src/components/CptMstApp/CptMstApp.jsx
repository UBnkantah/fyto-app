import { cryApd } from "../Data/Data"
import LearnCpt from "../images/learn-crypto.png"
import "./CptMstApp.css"

const CptMstApp = () => {
  return (
    <div className="container cptMstApp-container">
        <div className="cptmstapp-head">
            <p>THE MOST POPULAR APP</p>
            <h2>Become a crypto traider in seconds</h2>
            <p>Cryptocurrency markets have seen an increase in volume in recent weeks, which is a great opportunity for new traders.</p>
        </div>
        <div className="cptmstapp-traider-container">
        {cryApd.map((ad) => {
                    return (
                        <div className="cptmstapp-traider-flex" key={ad.id}>
                            <div className="flex-traid-detail">
                                <h2>{ad.head}</h2>
                                <p>Trade Bitcoin, Ethereum, USDT and most of other altcoins using our crypto trading app.</p>
                            </div>
                            <img src={ad.img} alt="" />
                        </div>      
                    )
                })}
            
        </div>
    </div>
  )
}

export default CptMstApp