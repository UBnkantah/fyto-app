import WeaImg from "../images/wedgt.png"
import "./HomeEarnCy.css"

const HomeEarnCy = () => {
  return (
    <div className='container homearny-container'>
        <div className="homearny-details">
          <p className="main-header-color">EARN CRYPTO</p>
          <h2 className="sub-sns-header">Deposit crypto earn interest</h2>
          <p className="cyt">Choose from 150+ cryptocurrencies</p>
          <div className="homearny-btm-cont">
            <div className="homearny-div">
              <h2 className="homearny-unit">15%</h2>
              <p>On Cryptos</p>
            </div>
            <div className="homearny-div">
              <h2 className="homearny-unit">40%</h2>
              <p>On stablecoins</p>
            </div>
          </div>
        </div>
        <div className="homearny-details">
            <img src={WeaImg} alt="" />
        </div>
    </div>
  )
}

export default HomeEarnCy