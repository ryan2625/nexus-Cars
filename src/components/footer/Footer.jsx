import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
    <div className='footer'>
        <div className="links1">
            <h1 className='shopper'>
                SHOP
            </h1>
            <ul>
                <li><a href="">Build & Price</a></li>
                <li><a href="">Search Inventory</a></li>
                <li><a href="">Get a Quote</a></li>
                <li><a href="">Trade-in Value</a></li>
            </ul>
        </div>

        <div className="links1">
            <div className="align">
        <h1 className='shopper'>
                FINANCING
            </h1>
        <ul>
                <li><a href="">Options</a></li>
                <li><a href="">Ownership</a></li>
                <li><a href="">Get a Quote</a></li>
                <li><a href="">Trade-in Value</a></li>
            </ul>
        </div>
        </div>
        <div className="socials">

        </div>
    </div>
  )
}

export default Footer