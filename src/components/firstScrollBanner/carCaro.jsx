import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import car1 from "./car1.png"
import car2 from "./car2.png"
import car2a from "./car2a.png"
import car1a from "./car1a.png"
import { useState, useEffect } from 'react'
import "./carCaro.css"

export default function CarCaro() {

  let firstImage
  let secondImage

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const [images, setImages] = useState([firstImage, secondImage])

  useEffect(() => {
    const logSize = () => {
      setWindowSize(window.innerWidth);
    }

    const firstImageOperator = windowSize > 768 ? car1a : car1;
    const secondImageOperator = windowSize > 768 ? car2 : car2a;

    setImages([firstImageOperator, secondImageOperator])
  
    window.addEventListener("resize", logSize);

  }, [window.innerWidth]);

    return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={images[0]}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={images[1]}
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    
}
