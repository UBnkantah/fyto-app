import { HmeBenDa } from "../Data/Data"
import HomeBenImg from "../images/ervress.png.png"
import StarImg from "../images/star.png.png"
import "./HomeBen.css"

const HomeBen = () => {
  return (
    <div className='container homeBen-container'>
        <div className="homeben-details">
            <p className="main-header-color">BENEFITS</p>
            <h2 className="sub-sns-header">Make Crypto Work Hard On You</h2>
            <img src={HomeBenImg} alt="" />
        </div>
        <div className="homeben-details">
            <p>You can buy snd sell 150+ Cryptocurrencies with 20+ fiat currencies using bank transfers on your credits or debits cards</p>
            <div className="flex-homeben-det-cont">
                {HmeBenDa.map((item) => {
                    return (
                        <div className="flex-homeben-det" key={item.id}>
                            <img src={item.img} alt="" />
                            <div className="flex-hmben-lt">
                                <h2>{item.name}</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere voluptates magnam labore ut, possimus numquam.</p>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>
    </div>
  )
}

export default HomeBen