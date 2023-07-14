import React from 'react'
import CarCaro from '../firstScrollBanner/carCaro'
import './Home.css'
import Banner1 from '../NextScrollBanner/banner1'
import ZeroBanner from '../0thScrollBanner/ZeroBanner'
import ZeroBannerA from '../0thScrollBanner/ZeroBannerA'
import ScrollBanner1 from '../secondScrollBanner/SecondScroll'
import Thankyou from '../thirdScrollBanner/Thankyou'
function Home() {
  return (<div className='homePage'>
   <CarCaro />
   <ZeroBanner />
   <ZeroBannerA />
   <div className="liner"></div>
   <Banner1 />
   <ScrollBanner1/>
   <Thankyou />
   </div>
  )
}

export default Home