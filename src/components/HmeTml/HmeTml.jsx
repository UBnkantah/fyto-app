import { HmetxtDa } from "../Data/Data"
import txtProf from "../images/paul-rojers.png"
import "./HmeTml.css"

const HmeTml = () => {
  return (
      <div className="container hmetml-container">
        <div className="hmetml-head">
          <p className="main-header-color">TESTIMONIALS</p>
          <h2 className="sub-sns-header">What People Say</h2>
          <p>You can buy snd sell 150+ Cryptocurrencies with 20+ fiat currencies using bank transfers on your credits or debits cards</p>
        </div>
        
        <div className="txtml-divs">
          {HmetxtDa.map((data) => {
            return (
              <div className="flex-txtml" key={data.id}>
                <div className="cry-star-container">
                  <div className="cpt-star"></div>
                  <div className="cpt-star"></div>
                  <div className="cpt-star"></div>
                  <div className="cpt-star"></div>
                  <div className="cpt-star"></div>
                </div>
                  <p>Great! Compared to Everything else I have ever used , this is the best technology</p>
                  <div className="txtml-profile">
                    <div className="txtml-profile-dt">
                      <p>{data.name}</p>
                      <p>{data.title}</p>
                    </div>
                    <img src={data.img} alt="" />
                  </div>
              </div>
            )
          })}
            
        </div>
      </div>
  )
}

export default HmeTml
