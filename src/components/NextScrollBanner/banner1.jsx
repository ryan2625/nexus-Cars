import React from 'react'
import './banner1.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import carWheel1 from './carWheel1.png';
import leatherInterior from './leatherInterior.png';
import sideView from './sideView.png';


function Banner1() {
  return (<div className="Container container1" >
    <div className="Row rowBanner1">
        <div className="Col-12 banner1Intro">
            SHOPPING TOOLS
        </div>
        <div className="Col-12">
            <img src={carWheel1} alt="" id="imageBanner1"/>
        </div>
        <div className="Col-12">
            <img src={leatherInterior} alt="" id="imageBanner2"/>
        </div>
        <div className="Col-12">
            <img src={sideView} alt="" id="imageBanner3"/>
        </div>
    </div>
  </div>
  )
}

export default Banner1