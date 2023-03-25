import TradImg from "../images/Transactions-efg.png.png"
import "./HomeTrad.css"

const HomeTrad = () => {
  return (
    <div className="container hometrad-components">
        <div className="hometrad-top">
            <p>BUY, STORE, SELL</p>
            <h2>Manage your transactions in one place</h2>
            <p>You can buy and sell 150+ cryptocurrencies with 20+ fiat currencies using bank transfers on your credit or debit card</p>
        </div>
        <img src={TradImg} alt="" />
    </div>
  )
}

export default HomeTrad