import txtProf from "../images/paul-rojers.png"

const HmeTml = () => {
  return (
    <div className='container'>
      <div className="hmetml-head">
        <p>TESTIMONIALS</p>
        <h2>What People Say</h2>
        <p>You can buy snd sell 150+ Cryptocurrencies with 20+ fiat currencies using bank transfers on your credits or debits cards</p>
        <div className="txtml-divs">
            <div className="flex-txtml">
                <p>Great! Compared to Everything else I have ever used , this is the best technology</p>
                <div className="txtml-profile">
                    <div className="txtml-profile-dt">
                        <p>Paul Rojers</p>
                        <p>Project Manager</p>
                    </div>
                    <img src={txtProf} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HmeTml
