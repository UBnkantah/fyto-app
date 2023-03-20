import React from 'react'
import ReactSwitch from "react-switch"

function darkmode() {
  document.body.classList.toggle("darkmode")
}



const Home = () => {
  return (
    <div>
      <div id="dark-mode-toggle" onClick={darkmode}></div>
      <h1>Home</h1>
      <ReactSwitch onChange={darkmode} checked />
    </div>
  )
}

export default Home