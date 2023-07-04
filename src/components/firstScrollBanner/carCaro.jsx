import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import car1 from "./car1.png"
import car2 from "./car2.png"
import car2a from "./car2a.png"
import car1a from "./car1a.png"
import { useState, useEffect } from 'react'

export default function CarCaro() {

  useEffect(() => {
    const logSize = () => {
    console.log(window.innerWidth)
    }
    window.addEventListener("resize", logSize);

  }, [window.innerWidth]);

    return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={car1a}
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
              src={car2}
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
