import HomeBenImg from "../images/ervress.png.png"

const HomeBen = () => {
  return (
    <div className='container'>
        <div className="homeben-img-sec">
            <p>BENEFITS</p>
            <h2>Make Crypto Work Hard On You</h2>
            <img src={HomeBenImg} alt="" />
        </div>
        <div className="homeben-details">
            <p>You can buy snd sell 150+ Cryptocurrencies with 20+ fiat currencies using bank transfers on your credits or debits cards</p>
            <div className="flex-homeben-det-cont">
                <div className="flex-homeben-det">
                    <img src="" alt="" />
                    <div className="flex-hmben-lt">
                        <h2>Best prices</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere voluptates magnam labore ut, possimus numquam.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeBen