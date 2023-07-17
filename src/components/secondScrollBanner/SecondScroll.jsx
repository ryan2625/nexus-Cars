import React from 'react'
import './SecondScroll.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRef, useEffect, useState} from 'react';
import { useInView } from 'react-intersection-observer';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PendingActionsIcon from '@mui/icons-material/PendingActions';


function SecondScroll() {
  return (
    <div className='scrollBanner1'>
        <div className="secondContainer">
            <div className="firstColumn" id='column1'>
                <EditCalendarIcon style={{scale: "2"}} className='hoverIcon'/>
                <h2>
                    SCHEDULE A TEST DRIVE
                </h2>
                <p>
                Enjoy an in-retailer private fitting room or bring the showroom to you.
                </p>
            </div>
            <div className="firstColumn" id='column2'>
            <ChatBubbleOutlineIcon style={{scale: "2"}} className='hoverIcon'/>
            <h2>
            CHAT WITH A CONCIERGE
                </h2>
                <p>
                Ask our qualified and licensed professionals any questions you may have.
                </p>
            </div>
            <div className="firstColumn" id='column3'>
            <PendingActionsIcon style={{scale: "2"}} className='hoverIcon'/>
            <h2>
            CUSTOM ORDERS
                </h2>
                <p>
                Select your vehicle options and have your perfect car delivered to you.
                </p>
            </div>
        </div>
    </div>

  )
}

export default SecondScroll