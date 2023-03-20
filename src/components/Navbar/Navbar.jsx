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
      <h2>Logo</h2>
      <nav ref={NavRef}>
        <Link to="/nft">NFT</Link>
        <Link to="/crypto">Crypto</Link>
        <Link to="/about">About Us</Link>
        <Link to="/team">Our Team</Link>
        <Link to="/blog">Blog</Link>
        <button className="get_btn">
          <Link to="/contact">
            Buy Now
          </Link>
        </button>
        <button className="navbar_btn navbar_close" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="navbar_btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  )
}

export default Navbar