import React, {useRef, useEffect} from 'react'
import { gsap } from 'gsap'
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import './imageLoadingStyle.scss'

const ImageLoading = () => {
    let container = useRef(null) // writing let object so the object can be overwritten later
    let image = useRef(null)
    gsap.registerPlugin(CSSRulePlugin)
    let imageReveal = CSSRulePlugin.getRule('.img-container:after')

    const tl = gsap.timeline()

    useEffect(() => {
       tl.to(container, {duration: 0, css: {visibility: "visible"}})
       .to(imageReveal, {duration: 1.4, width: "0%", ease: "power2.easeInOut"})
       .from(image, {duration: 1.4, scale: 1.6, ease: "power2.easeInOut", delay: -1.6})
    }, [])
  return (
    <section className='main'>
        <div ref={el => container = el} className='container'>
            <>
                <div className='img-container'>
                    <img 
                    ref={el => image = el}
                    src='./background.JPG' alt='twyla'/>
                </div>
            </>
        </div>
    </section>
  )
}

export default ImageLoading