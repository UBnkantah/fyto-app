import { useState } from "react"
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"
import "./Navbar.css"

const Navbar = () => {
  const [mobile, setMobile] = useState(false)

  return (
    <div className="navbar">
      <h2>
        <Link to="/" className="navbar-logo">
          Toka
        </Link>
      </h2>
      <nav className={mobile ? "nav-links-mob" : "nav-links"} onClick={() => setMobile(false)}>
        <Link to="/nft">NFT</Link>
        <Link to="/crypto">Crypto</Link>
        <Link to="/about">About</Link>
        <Link to="/team">Team</Link>
        <Link to="/blog">Blog</Link>
        <button
          className={mobile ? "btn-desk btn-all" : "btn-mob btn-all"}
        >
          <Link to="contact">
            Buy Now
          </Link>
        </button>
      </nav>
      <button
        className={!mobile ? "btn-desk btn-all" : "btn-mob btn-all"}
        id="btn-si"
      ><Link to="contact">Buy Now</Link></button>
      <button className="nav-icons" onClick={() => setMobile(!mobile)}>
        {mobile ? <FaTimes color="white" size={20} /> : <FaBars color="white" size={20} />}
      </button>
    </div>
  )
}

export default Navbar