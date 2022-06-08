import React, {useRef, useEffect} from 'react'
import {gsap} from 'gsap'
import './heroStyle.scss'
import imgBoy from '../../assets/image.jpeg'
import imgGirl from '../../assets/image2.jpeg'
import arrow from '../../assets/arrow-in-circle.SVG'

const Hero = () => {
    let app = useRef(null)
    let images = useRef(null)
    let content = useRef(null)

    let tl = new gsap.timeline({delay: .8})

    useEffect(() => {
        //Images vars
        // this will give you the first child div of the images reference
        const girlImage = images.firstElementChild

        // this will give you the last child div of the images reference
        const boyImage = images.lastElementChild

        //content vars
        const headlineFirst = content.children[0].children[0]
        const headlineSecond = headlineFirst.nextSibling
        const headlineThird = headlineSecond.nextSibling

        const contentP = content.children[1]

        const contentButton = content.children[2]

        gsap.to(app, {duration: 0, css: {visibility: 'visible'}})

        // for images animation
        tl.from(girlImage, {duration: 1.5, y: 1280, ease: "power3.easeOut"}, 'Start')
        .from(girlImage.firstElementChild, {duration: 2, scale: 1.6, ease: "power3.easeOut"})

        tl.from(boyImage, {duration: 1.5, y: 1280, ease: "power3.easeOut", delay: 1.8}, 'Start')
        .from(boyImage.firstElementChild, {duration: 2, scale: 1.6, ease: "power3.easeOut", delay: -1.3})

        // for content animation
        tl.from([headlineFirst.children, headlineSecond.children, headlineThird.children],
            {duration: 1, y: 44, ease: "power3.easeOut", delay: .8, stagger: {
                each: .15
            }}, 'Start')
            .from(contentP, {duration: 1, y: 20, opacity: 0, ease: "power3.easeOut"})
            .from(contentButton, {duration: 1, y: 20, opacity: 0, ease: "power3.easeOut"})
        // start means the first timeline and this timeline will run together
    }, [tl])

  return (
    <div className='hero' ref={el => app = el}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content = el}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Relieving the burden</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">of disease caused</div>  
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behaviors.</div>
                </div>
              </h1>
              <p>
                Better treats serious cardiometabolic diseases to transform
                lives and reduce healthcare utilization through the use of
                digital therapeutics.
              </p>
              <div className="btn-row">
                <button className="explore-button">Explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="row"/>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" ref={el => images = el}>
              <div className="hero-image girl">
                <img src={imgGirl} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={imgBoy} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero