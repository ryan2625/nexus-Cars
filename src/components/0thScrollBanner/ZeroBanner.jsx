import React from 'react'
import './zerobanner.css'
import dealCar1 from "./dealCar1.png"
import dealCar2 from "./dealCar2.png"
import dealCar3 from "./dealCar3.png"
import { useRef, useEffect, useState} from 'react';
import { useInView } from 'react-intersection-observer';

function ZeroBanner() {

    const { ref: currentOffers, inView: offersVisible} = useInView({
        rootMargin: '-300px 0px'
    });

  return (<>
    <div className="title0">
        <h2 className={offersVisible ? "models " + "offersAnimation" : "models"} ref={currentOffers}>VEHICLES AND CURRENT OFFERS</h2>
    </div>
    <div className="ZVehicles">
        <div className="v1 carPics">
            <div className="picHov">
                <img src={dealCar1} alt="" />
            </div>
            <span className='covering'></span>
            <h3>CURRENT OFFERS</h3>
            <p>FIND LEASE AND CASH OFFERS IN YOUR AREA</p>
        </div>
        <div className="v2 carPics">
        <div className="picHov">
            <img src={dealCar2} alt="" />
        </div>
        <span className='covering'></span>
            <h3>THE 2025 LZ</h3>
            <p>THE NEWEST IN NEXUS ELECTRONICS</p>
        </div>
        <div className="v3 carPics">
        <div className="picHov">
            <img src={dealCar3} alt="" />
        </div>
        <span className='covering'></span>
            <h3>THE 2024 ES</h3>
            <p>UNMATCHED PERFORMANCE</p>
        </div>
    </div>
    </>
  )
}

export default ZeroBanner