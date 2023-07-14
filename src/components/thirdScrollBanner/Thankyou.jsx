import React from 'react'
import './Thankyou.css'
import { useInView } from 'react-intersection-observer';

function Thankyou() {

  const { ref: shoppingTools, inView: toolsVisible} = useInView({
    rootMargin: '-75px 0px'
});

  return (
  <div>
    <div>THANK <span>YOU</span>FOR YOUR INTEREST IN NEXUS.</div>
    <div>Some models, trims and features may not be available. Please contact your local Lincoln Retailer for updates and assistance.</div>
  </div>
  )
}

export default Thankyou