import AbtSc1 from "../images/abt-scroll-one.png"
import AbtSc2 from "../images/abt-scroll-two.png"
import AbtSc3 from "../images/abt-scroll-three.png"
import AbtSc4 from "../images/abt-scroll-four.png"
import AbtSc5 from "../images/abt-scroll-five.png"

const AbtPath = () => {
  return (
    <div>
      <div className="abtpath-header">
        <p>PATHNERSHIP</p>
        <h2>Meet our Partners</h2>
        <p>Our company was founded in 2020. We work daily to become better and we are ready to share best practices.</p>
        <div className="abt-scr-path-container">
            <div className="abt-flex-scr">
                <img src={AbtSc1} alt="" />
                <img src={AbtSc2} alt="" />
                <img src={AbtSc3} alt="" />
                <img src={AbtSc4} alt="" />
                <img src={AbtSc5} alt="" />
            </div>
            <div className="abt-flex-scr">
                <img src={AbtSc1} alt="" />
                <img src={AbtSc2} alt="" />
                <img src={AbtSc3} alt="" />
                <img src={AbtSc4} alt="" />
                <img src={AbtSc5} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default AbtPath
