import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import car1 from "./car1.png"
import car2 from "./car2.png"
import car2a from "./car2a.png"
import car1a from "./car1a.png"
import { useState, useEffect, useLayoutEffect } from 'react'
import "./carCaro.css"

export default function CarCaro() {

  let firstImage
  let secondImage

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const [images, setImages] = useState([firstImage, secondImage])

  const [aspectRatio, setAspectRatio] = useState("desktopPic")

  useLayoutEffect(() => {
    const logSize = () => {
      setWindowSize(window.innerWidth);
    }

    setAspectRatio(windowSize > 768 ? "desktopPic" : "mobilePic")

    const firstImageOperator = windowSize > 768 ? car1a : car1;
    const secondImageOperator = windowSize > 768 ? car2 : car2a;



    setImages([firstImageOperator, secondImageOperator])
  
    window.addEventListener("resize", logSize);

  }, [window.innerWidth]);

    return (
        <Carousel interval={4000} slide={4000} className={aspectRatio}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={images[0]}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>THE ALL-NEW GX</h3>
              <p>EMBRACE INNOVATION IN MOTION.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={images[1]}
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>THE FIRST-EVER TX</h3>
              <p>THREE ROWS. ZERO COMPROMISE.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    
}
