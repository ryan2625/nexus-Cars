import React from 'react'
import './SecondScroll.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRef, useEffect, useState} from 'react';
import { useInView } from 'react-intersection-observer';
function SecondScroll() {
  return (
    <div className='scrollBanner1'>SecondScroll</div>
  )
}

export default SecondScroll