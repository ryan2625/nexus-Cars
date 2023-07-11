import React from 'react'
import './banner1.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imageTool1 from "./imageTools1.png"
import imageTool2 from "./imageTools2.png"
import imageTool3 from "./imageTools3.png"
import { useRef, useEffect, useState} from 'react';
import { useInView } from 'react-intersection-observer';
import banner3 from "./banner3.png"


function Banner1() {

    

    const { ref: shoppingTools, inView: toolsVisible} = useInView({
        rootMargin: '-75px 0px'
    });

    const { ref: toolsPic, inView: toolPicVisible} = useInView({
        rootMargin: '-175px 0px'
    });
    


{/*const myRef = useRef()
const [myElementIsVisible, setMyElementIsVisible] = useState()
console.log('myElementIsVisible', myElementIsVisible)
useEffect(() => {
    const observer = new IntersectionObserver((entries) =>{
        const entry = entries[0]
        setMyElementIsVisible(entry.isIntersecting)
    })
    observer.observe(myRef.current)
},[]) */}

  return (<div className="Container fluid container1" >
    <div className="Row rowBanner1">
    <div className="animationContainer" ref={shoppingTools}>
        <div  className={ toolsVisible ? "noneDisplay2 toolsAnimation" : "noneDisplay2 toolsAnimation2"}>
                SHOPPING TOOLS
            </div>
        </div>
        </div>
            <div className="gridSystemBanner">
                <div className="">
                    REVOLUTIONARY. 
                </div>
            <div className="gridSystemBanner1">
                <div className="relativePictures" ref={toolsPic}>
                    <div className={toolPicVisible ? "relativePicture1 picturesHover toolsPic3 animator" : "relativePicture1 picturesHover toolsPic3 animator toolsPicR"}>
                        <div className="picture1tooler">
                            <img src={imageTool1} alt="" id="imageBanner1"/> 
                        </div>
                    </div>
                    <div className={toolPicVisible ? "relativePicture2 picturesHover toolsPic2 animator" : "relativePicture1 picturesHover toolsPic3 animator"}>
                    <div className="picture1tooler picture1toolera">
                        <img src={imageTool2} alt="" id="imageBanner2" className='animator'/>
                        </div>
                    </div>
                    <div className={toolPicVisible ? "relativePicture3 picturesHover toolsPic animator" : "relativePicture1 picturesHover toolsPic3 animator"}>
                    <div className="picture1tooler picture1toolerb">
                        <img src={imageTool3} alt="" id="imageBanner3" className='animator'/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="parrallax">
                
            </div>
            <div className="placeHolder">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam nemo doloribus, ullam ea voluptates neque, ducimus natus nisi ratione sequi, earum reiciendis obcaecati quos. Numquam ipsa velit provident accusamus aliquid.
            </div>
            <div className="liner"></div>
  </div>
  )
}            

export default Banner1