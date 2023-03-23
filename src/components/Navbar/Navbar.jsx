import { useRef } from "react"
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"
import "./Navbar.css"

const Navbar = () => {
  const NavRef = useRef();

  const showNavbar = () => {
    NavRef.current.classList.toggle("responsive_navbar")
  }

  return (
    <div className="navbar">
      <h2>
        <Link to="/">
          Toka  
        </Link>
      </h2>
      <nav ref={NavRef}>
        <Link to="/nft" onClick={showNavbar}>NFT</Link>
        <Link to="/crypto" onClick={showNavbar}>Crypto</Link>
        <Link to="/about" onClick={showNavbar}>About Us</Link>
        <Link to="/team" onClick={showNavbar}>Our Team</Link>
        <Link to="/blog" onClick={showNavbar}>Blog</Link>
        <button className="get_btn" onClick={showNavbar}>
          <Link to="/contact">
            Buy Now
          </Link>
        </button>
        <button className="navbar_btn navbar_close" onClick={showNavbar}>
          <FaTimes size={23} />
        </button>
      </nav>
      <button className="navbar_btn" onClick={showNavbar}>
        <FaBars size={23} />
      </button>
    </div>
  )
}

export default Navbar