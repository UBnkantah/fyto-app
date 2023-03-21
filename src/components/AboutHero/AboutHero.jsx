import AbtImg from "../images/about-hero-img.png"
import userSec from "../images/user-security.png"
import { userEx } from "../Data/Data"
import "./AboutHero.css"

const AboutHero = () => {
  return (
    <div className="container about-container">
        <div className="about-hero-div">
            <p>OUR STORY</p>
            <h2>About our company</h2>
            <p>Cryptocurrency markets have seen an increase in volume in recent weeks, which is a great opportunity for new traders.</p>
        </div>
        <div className="about-hero-img">
            <img src={AbtImg} alt="" />
        </div>
        <div className="about-mission">
            <div className="abt-mission-dts">
                <p>OUR MISSION</p>
                <h2>We are helping people to get a success.</h2>
            </div>
            <div className="abt-mission-dts">
                <p>Invest in Bitcoin, Ethereum, USDT, and other cryptocurrencies using our crypto trading app. The Bitcoin and cryptocurrency markets have experienced a surge in volume recently, making it an exciting time to become a trader. Cryptocurrency markets have seen an increase in volume in recent weeks, which is a great opportunity for new traders.</p>
            </div>
        </div>
        <div className="user-about">
            {userEx.map((user) => {
                return(
                    <div className="flex-user" key={user.id}>
                        <img src={user.img} alt="" />
                        <h2>{user.title}</h2>
                        <p>Cras eu semper neque, sit amet aliquet odio. Donec volutpat enim quis mollis consequat.</p>
                    </div>
                )
            })}
            
        </div>
    </div>
  )
}

export default AboutHero
