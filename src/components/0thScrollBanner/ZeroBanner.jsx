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

  return (<>
  <div className="offeringContainer" ref={currentOffers}>
    <div className={offersVisible ? "noneDisplay  " + "offersAnimation" : "noneDisplay " + "offersAnimation2"}>
        <h2 className='secondary'>
            VEHICLES AND CURRENT OFFERS
            </h2>
    </div>
    </div>
    
    </>
  )
}

export default ZeroBanner