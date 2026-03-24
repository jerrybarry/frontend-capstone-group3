import React from 'react'
import './Hero.css'

function Hero() {

  function scrollToExplore() {
    document.getElementById('planets').scrollIntoView({ behavior: 'smooth' })
  }

  function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    /*
      Hero section — Figma specs:
      width: 1440px, height: 620px
      background: #051540
    */
    <section className="hero">
      <div className="hero-inner">

        {/* Left side — text content */}
        <div className="hero-content">

          {/*
            Heading — Figma specs:
            width: 549px, height: 116px
            top: 205px, left: 121px
            font: Inter Bold 700, 48px, line-height 121%
          */}
          <h1 className="hero-heading">
            Explore Our Solar System Through Data
          </h1>

          {/*
            Paragraph — Figma specs:
            width: 534px, height: 87px
            top: 341px, left: 121px
            font: Inter Medium 500, 18px, line-height 160%, letter-spacing -2%
          */}
          <p className="hero-subtext">
            Understand the planets not just by name, but by measurable facts.
            From size and mass to gravity and density, this page breaks down
            the solar system in a clear, data-driven way.
          </p>

          {/* Buttons row */}
          <div className="hero-buttons">

            {/*
              Primary button — Figma specs:
              width: 160.5px, height: 44px
              border-radius: 8px, padding: 0 20px
              background: #164BAF
              font: Inter SemiBold 600, 16px, line-height 150%, letter-spacing -2%
            */}
            <button className="btn-primary" onClick={scrollToExplore}>
              Explore the Data
            </button>

            {/*
              Secondary button — Figma specs:
              width: 160.5px, height: 44px
              border-radius: 8px, padding: 0 20px
              background: #051540
              border: 0.5px solid #DDDDDD
              font: Inter SemiBold 600, 16px
            */}
            <button className="btn-secondary" onClick={scrollToContact}>
              Contact Us
            </button>

          </div>
        </div>

        {/*
          Hero image — Figma specs:
          width: 644px, height: 644px
          top: 40px, left: 737px
          Replace src with the actual planet image
        */}
        <div className="hero-image-wrapper">
          <img
            src="/hero-planet.png"
            alt="A vivid blue planet representing Earth from space"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero
