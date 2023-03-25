// import React from 'react'
// import ReactSwitch from "react-switch"
import HmeTml from '../components/HmeTml/HmeTml'
import HomeBen from '../components/HomeBen/HomeBen'
import HomeEarnCy from '../components/HomeEarnCy/HomeEarnCy'
import HomeHero from '../components/HomeHero/HomeHero'
import HomeSrt from '../components/HomeSrt/HomeSrt'
import HomeTrad from '../components/HomeTrad/HomeTrad'
import Footer from "../components/Footer/Footer"

// function darkmode() {
//   document.body.classList.toggle("darkmode")
// }



const Home = () => {
  return (
    <div>
      {/* <div id="dark-mode-toggle" onClick={darkmode}></div>
      <h1>Home</h1>
      <ReactSwitch onChange={darkmode} checked /> */}
      <HomeHero />
      <HomeTrad />
      <HomeEarnCy />
      <HomeBen />
      <HmeTml />
      <HomeSrt />
      <Footer />
    </div>
  )
}

export default Home