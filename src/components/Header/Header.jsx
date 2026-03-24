import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        {/*
          Logo from Figma:
          width: 121px, height: 52px
          left: 119px, top: 27px
          Replace src with your actual logo image file
        */}
        <div className="header-logo">
          <img
            src="/planet-logo.png"
            alt="Planet Creative World"
            className="header-logo-img"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
