import "./AboutDo.css"
import abtDoImgTop from "../images/about-user-top.png"
import abtDoImgLeft from "../images/about-user-left.png"
import abtDoImgRgt from "../images/about-user-right.png"

const AboutDo = () => {
  return (
    <div className='abtDo-container container'>
        <div className="abtDo-imgs">
            <div className="abtDo-top-img">
                <img src={abtDoImgTop} alt="" />
            </div>
            <div className="abtDo-left-img">
                <img src={abtDoImgLeft} alt="" />
            </div>
            <div className="abtDo-right-img">
                <img src={abtDoImgRgt} alt="" />
            </div>
        </div>
        <div className="abtDo-details">
            <p>WHAT WE DO</p>
            <h2>Millions of users around the world</h2>
            <p>
                Invest in Bitcoin, Ethereum, USDT, and other cryptocurrencies using our crypto trading app. The Bitcoin and cryptocurrency markets have experienced a surge in volume recently, making it an exciting time to become a trader. Cryptocurrency markets have seen an increase in volume in recent weeks, which is a great opportunity for new traders.
            </p>
            <button>Start Now</button>
        </div>
    </div>
  )
}

export default AboutDo
