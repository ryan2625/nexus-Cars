import React from 'react'
import './zerobanner.css'
import dealCar1 from "./dealCar1.png"
import dealCar2 from "./dealCar2.png"
import dealCar3 from "./dealCar3.png"
import { useRef, useEffect, useState} from 'react';
import { useInView } from 'react-intersection-observer';

function ZeroBanner() {

    const { ref: currentOffers, inView: offersVisible} = useInView({
        rootMargin: '-150px 0px'
    });

    const h2refer = useRef();

    const [width2, setWidth] = useState(0);

    const [widthScreen, setWidthScreen] = useState(0);

    useEffect(() => {
      const logSize = () => {
        setWidthScreen(window.innerWidth);
      }
      setWidthScreen(window.innerWidth)
      window.addEventListener("resize", logSize);
    }, [window.innerWidth]);

    useEffect(() => {
      const getWidth = () => {
        if (h2refer.current) {
          const width = h2refer.current.offsetWidth;
          setWidth(width)
          
        }
      };
      getWidth();
      
        h2refer.current.style.setProperty('--h2-width', `${width2}px`);
      
      console.log('Element width:', h2refer.current.offsetWidth);

    }, [widthScreen]);

  return (<>
    <div className={offersVisible ? "noneDisplay  " + "offersAnimation" : "noneDisplay " + "offersAnimation2"} ref={currentOffers}>
        <h2 ref={h2refer}>
            VEHICLES AND CURRENT OFFERS
            </h2>
    </div>
    
    </>
  )
}

export default ZeroBanner