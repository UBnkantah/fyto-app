import { abtGall } from "../Data/Data"
import "./AboutGall.css"

const AboutGall = () => {
  return (
    <div className="abt-gall-com">
        {abtGall.map((gal) => {
            return(
                <div className="abt-gallery" key={gal.id}>
                    <img src={gal.img} alt="" />
                </div>
            )
        })}
        
    </div>
  )
}

export default AboutGall
