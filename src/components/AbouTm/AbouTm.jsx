import { Link } from "react-router-dom"
import { Abteam } from "../Data/Data"
import "./AbouTm.css"

const AbouTm = () => {
  return (
    <div className="aboutm-container container">
        <div className="aboutm-header">
            <p>OUR TEAM</p>
            <h2>Meet our crypto experts</h2>
            <p>Our company was founded in 2020. We work daily to become better and we are ready to share best practices.</p>
        </div>
      <div className="abt-team">
        {Abteam.map((abt) => {
            return(
                <div className="flex-abt-team" key={abt.id}>
                    <img src={abt.img} alt="" />
                    <h2>{abt.name}</h2>
                    <p>{abt.title}</p>
                </div>
            )
        })}
        
      </div>
      <Link to="/team">View all team</Link>
      
    </div>
  )
}

export default AbouTm
