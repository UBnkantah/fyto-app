import { CwhyData } from "../Data/Data"
import "./CptWhy.css"

const CptWhy = () => {
  return (
    <div className="container cptwhy-container">
        <div className="cptWhy-header">
            <p className="main-header-color">FEATURES</p>
            <h2 className="sub-sns-header">Why Us?</h2>
            <p>Cryptocurrency markets have seen an increase in volume in recent weeks, which is a great opportunity for new traders.</p>
        </div>

        <div className="whyUsComp">
            {CwhyData.map((dat) => {
                return (
                    <div className="flex-whyUs" key={dat.id}>
                        <img src={dat.img} alt="" />
                        <h2>{dat.head}</h2>
                        <p>Trade Bitcoin, Ethereum, USDT and other altcoins using our crypto trading app.</p>
                    </div>
                )
            })}
            
        </div>
    </div>
  )
}

export default CptWhy