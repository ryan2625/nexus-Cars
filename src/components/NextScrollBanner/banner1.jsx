import React from 'react'
import './banner1.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import carWheel1 from './carWheel1.png';
import leatherInterior from './leatherInterior.png';
import sideView from './sideView.png';
import { useRef, useEffect, useState} from 'react';
import { useInView } from 'react-intersection-observer';


function Banner1() {

    

    const { ref: shoppingTools, inView: toolsVisible} = useInView({
        rootMargin: '-250px 0px'
    });
    


{/*const myRef = useRef()
const [myElementIsVisible, setMyElementIsVisible] = useState()
console.log('myElementIsVisible', myElementIsVisible)
useEffect(() => {
    const observer = new IntersectionObserver((entries) =>{
        const entry = entries[0]
        setMyElementIsVisible(entry.isIntersecting)
    })
    observer.observe(myRef.current)
},[]) */}

  return (<div className="Container fluid container1" >
    <div className="Row rowBanner1">
    <div className="animationContainer" ref={shoppingTools}>
        <div  className={ toolsVisible ? "noneDisplay2 toolsAnimation" : "noneDisplay2 toolsAnimation2"}>
                SHOPPING TOOLS
            </div>
        </div>
        </div>
            <div className="gridSystemBanner">
                <div className="">
                    REVOLUTIONARY. 
                </div>
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