import Crytesty from "../images/cry-testy.png"
import "./Crytstmill.css"
import txtUserPf from "../images/dora-adams.png"
import { txtUser } from "../Data/Data"

const Crytstmill = () => {
  return (
    <div className='container crytstmill-container'>
        <div className="crytstmill-top">
            <div className="crytstmill-det">
                <p>TESTIMONIALS</p>
                <h2>Millions of users around the world</h2>
                <p>It’s an exciting time to become a trader.</p>
                <button>
                    Learn more
                </button>
            </div>
            <div className="crytstmill-det">
                <img src={Crytesty} alt="" />
            </div>
        </div>
        <div className="crytstusers">
            {txtUser.map((user) => {
                return(
                    <div className="flex-crytstuser" key={user.id}>
                        <div className="cry-star-container">
                            <div className="cpt-star"></div>
                            <div className="cpt-star"></div>
                            <div className="cpt-star"></div>
                            <div className="cpt-star"></div>
                            <div className="cpt-star"></div>
                        </div>
                        <p>“{user.subTit}”</p>
                        <div className="cpt-profile-cont">
                            <div className="cpt-prof-lt">
                                <p>{user.name}</p>
                                <p>{user.title}</p>
                            </div>
                            <div className="cpt-prof-img">
                                <img src={user.img} alt="" />
                            </div>
                            
                        </div>
                    </div>
                )
            })}
            
        </div>
    </div>
  )
}

export default Crytstmill