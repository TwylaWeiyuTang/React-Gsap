import React, {useRef, useEffect, useState} from 'react'
import { gsap, Power3} from 'gsap'

const CircleAnimation = () => {
    let circleContainer = useRef(null)
    let circle = useRef(null)
    let circleRed = useRef(null)
    let circleBlue = useRef(null)

    const [circleSize, setCircleSize] = useState(false)

    const handleExpand = () => {
        gsap.to(circleRed, {duration: 1, width: 200, height: 200, ease: "power3.easeOut"})
        setCircleSize(true)
    }

    const handleShrink = () => {
        gsap.to(circleRed, {duration: 1, width: 75, height: 75, ease: "power3.easeOut"})
        setCircleSize(false)
    }

    useEffect(() => {
        gsap.to(circleContainer, {duration: 0, css: {visibility: 'visible'}})
        // to help the circle objects load smoother when we refresh the page

        gsap.from(circle, {duration: 2, opacity: 0, x: 40, ease: Power3.easeOut})
        // the effect will start from the point we set up
        gsap.from(circleRed, {duration: 2, opacity: 0, x: 40, ease: Power3.easeOut, delay: 0.5})
        gsap.from(circleBlue, {duration: 2, opacity: 0, x: 40, ease: Power3.easeOut, delay: 1})
    }, [])

  return (
    <div ref={el => circleContainer = el} className='circle-container'>
        <div 
        ref={el => circle = el}
        className='circle'></div>

        <div 
        ref={el => circleRed = el}
        onClick={!circleSize ? handleExpand : handleShrink}
        className='circle red'></div>

        <div 
        ref={el => circleBlue = el}
        className='circle blue'></div>
    </div>
  )
}

export default CircleAnimation