import WeaImg from "../images/wedgt.png"
import "./HomeEarnCy.css"

const HomeEarnCy = () => {
  return (
    <div className='container homearny-container'>
        <div className="homearny-details">
          <p>EARN CRYPTO</p>
          <h2>Deposit crypto earn interest</h2>
          <p>Choose from 150+ cryptocurrencies</p>
          <div className="homearny-btm-cont">
            <div className="homearny-div">
              <h2>15%</h2>
              <p>On Cryptos</p>
            </div>
            <div className="homearny-div">
              <h2>40%</h2>
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