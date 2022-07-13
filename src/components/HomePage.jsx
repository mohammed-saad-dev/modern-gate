import React from 'react'
import Logo from '../images/Logo.png'
  function HomePage() {
    return (
      <div className='HomePage'>
        <nav>
        <a href="#locations"><i className="fa-solid fa-phone"></i></a>
        <a href="#locations"><i className="fa-solid fa-location-dot"></i></a> 
        </nav>

        <div className='Circle'>
          <img src={Logo} className='logo' alt="logo"/>
          <p><span style={{color:"#865A1F"}}>modern</span><span  style={{color:"#DBAD60"}}>gate</span> </p>
          <a href="#about"><button> about us</button></a>
        </div>

      </div>
    )
  }

export default HomePage
