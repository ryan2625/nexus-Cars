import React from 'react'
import './banner1.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import carWheel1 from './carWheel1.png';
import leatherInterior from './leatherInterior.png';
import sideView from './sideView.png';


function Banner1() {
  return (<div className="Container fluid container1" >
    <div className="Row rowBanner1">
        <div className="Col-12 banner1Intro">
            SHOPPING TOOLS
        </div>
        </div>
            <div className="gridSystemBanner">
            <div className="gridSystemBanner1">
                <div className="relativePictures">
                    <div className="relativePicture1 picturesHover">
                        <img src={carWheel1} alt="" id="imageBanner1"/> 
                    </div>
                    <div className="relativePicture2 picturesHover">
                    <img src={leatherInterior} alt="" id="imageBanner2"/>
                    </div>
                    <div className="relativePicture3 picturesHover">
                    <img src={sideView} alt="" id="imageBanner3"/>
                    </div>
                </div>
            </div>
            </div>
  </div>
  )
}            

export default Banner1