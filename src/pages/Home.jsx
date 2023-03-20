import React from 'react'

function darkmode() {
  document.body.classList.toggle("darkmode")
}

const Home = () => {
  return (
    <div>
      <div id="dark-mode-toggle" onClick={darkmode}></div>
    </div>
  )
}

export default Home