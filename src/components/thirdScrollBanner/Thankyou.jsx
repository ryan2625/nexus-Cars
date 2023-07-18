import React from 'react'
import './Thankyou.css'
import { useInView } from 'react-intersection-observer';

function Thankyou() {

  const { ref: thankYou, inView: thanksVisible} = useInView({
    rootMargin: '-170px 0px'
});

  return (
  <div className='thankYouContainer'>
    <div className="refererer"  ref={thankYou}>
    <div className={thanksVisible ? "thankYou1" : "thankYou1 thankYou1a"}>THANK <span className={thanksVisible ? "thankYouColored" : "thankYouColored thankYouColoreda"} >YOU</span> <span className={thanksVisible ? "thankYou3" : "thankYou3a"}> FOR YOUR INTEREST IN NEXUS.</span> </div>

    <div className={thanksVisible ? "thankYou2" : "thankYou2 thankYou2a"} >Some models, trims and features may not be available. Please contact your local Nexus Retailer for updates and assistance.</div>
    </div>
  </div>
  )
}

export default Thankyou