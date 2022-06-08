import React, {useEffect, useRef, useState} from 'react'
import { gsap } from 'gsap'
import './sliderAnimationStyle.scss'
import { testimonials } from '../../utils/testmonials'

const SliderAnimation = () => {
    let imageList = useRef(null)
    let testimonialList = useRef(null)
    const imageWidth = 340

    const [state, setState] = useState({
        isActive1: true,
        isActive2: false,
        isActive3: false
    })

    useEffect(() => {
        // reveal the text
        gsap.to(testimonialList.children[0], {duration: 0, opacity: 1})
    }, [])

    const slideLeft = (index, duration, multiplied = 1) => {
        gsap.to(imageList.children[index], 
            {duration: duration, x: -imageWidth * multiplied, ease: "power3.easeOut"})
    }

    const slideRight = (index, duration, multiplied = 1) => {
        gsap.to(imageList.children[index], 
            {duration: duration, x: imageWidth * multiplied, ease: "power3.easeOut"})
    }

    const scale = (index, duration) => {
        gsap.from(imageList.children[index], {duration: duration, scale: 1.2, ease: "power3.easeOut"})
    }

    const fadeOut = (index, duration) => {
        gsap.to(testimonialList.children[index], {duration, opacity: 0})
    }

    const fadeIn = (index, duration) => {
        gsap.to(testimonialList.children[index], {duration, opacity: 1, delay: 1})
    }

    const nextSlide = () => {
        if (imageList.children[0].classList.contains('active')) {
            setState({isActive1: false, isActive2: true})
            // move the first image out of box
            slideLeft(0, 1)

            // move the second image inside the box
            slideLeft(1, 1)

            //scale the image when slide to it
            scale(1, 1);

            // move the third image next to the second one so it's ready for the next left slide
            slideLeft(2, 1)

            slideLeft(2, 0);

            // fade out the first text
            fadeOut(0, 1)
            
            // fade in the second text
            fadeIn(1, 1)
    
        } else if (imageList.children[1].classList.contains('active')) {
            setState({isActive2: false, isActive3: true})

            // move the first image to the starting point
            slideRight(0, 1);

            // move the second image out of box
            slideLeft(1, 1, 2)

            // move the third image inside the box
            slideLeft(2, 1, 2)

            //scale the image when slide to it
            scale(2, 1);

            // fade out the second text
            fadeOut(1, 1)

            // fade in the third text
            fadeIn(2, 1)

        } else if (imageList.children[2].classList.contains('active')) {
            setState({isActive3: false, isActive1: true})
            // move the third image out of box
            slideLeft(2, 1, 3)

            // move the first image inside the box
            slideLeft(0, 1, 0)

            // move the second image 
            slideLeft(1, 0, 0)

            // fade out the third text
            fadeOut(2, 1)

            // fade in the first text
            fadeIn(0, 1)
        }
    }

    const prevSlide = () => {
        if (imageList.children[0].classList.contains('active')) {
            setState({isActive1: false, isActive3: true})
            // move the last image inside of box
            slideLeft(2, 0, 3)

            slideLeft(2, 1, 2)

            //scale the image when slide to it
            scale(2, 1);



            // move the first image to right
            slideRight(0, 1)

            // move the second image to right as well
            slideRight(1, 1)

            // fade out the first text
            fadeOut(0, 1)
            
            // fade in the second text
            fadeIn(2, 1)
    
        } else if (imageList.children[1].classList.contains('active')) {
            setState({isActive2: false, isActive1: true})

            slideLeft(0, 0);
            slideRight(0, 1, 0);
            slideRight(1, 1, 0);
            slideRight(2, 1, 2);
            scale(0, 1);
            //content transtion
            fadeOut(1, 1);
            fadeIn(0, 1);

        } else if (imageList.children[2].classList.contains('active')) {
            setState({isActive3: false, isActive2: true})

            // move the second one to the left by 2
            slideLeft(1, 0, 2)

            // move the second one to the left by 1
            slideLeft(1, 1)

            // move the third one to the right
            slideRight(2, 1)

            // move the third one to the left by 1 so it's next to the next image
            slideLeft(2, 1)

            scale(1, 1);

            fadeOut(2, 1);
            fadeIn(1, 1);
        }
    }

  return (
    <div className='testimonial-section'>
        <div className='testimonial-container'>
            <div onClick={prevSlide} className='arrows left'>
                <span>
                    <img src='./left-arrow.SVG' alt='left arrow' />
                </span>
            </div>

            <div className='inner'>
                <div className='t-image'>
                    <ul 
                    ref={el => imageList = el}
                    style={{listStyleType: "none"}}>
                        <li className={state.isActive1 ? "active" : ""}>
                            <img src={testimonials[0].image} alt={testimonials[0].name} />
                        </li>

                        <li className={state.isActive2 ? "active" : ""}>
                            <img src={testimonials[1].image} alt={testimonials[1].name} />
                        </li>

                        <li className={state.isActive3 ? "active" : ""}>
                            <img src={testimonials[2].image} alt={testimonials[2].name} />
                        </li>
                    </ul>
                </div>

                <div className='t-content'>
                    <ul 
                    ref={el => testimonialList = el}
                    style={{listStyleType: "none"}}>
                        <li className={state.isActive1 ? "active" : ""}>
                            <div className='content-inner'>
                                <p className='quote'>{testimonials[0].quote}</p>
                                <h3 className='name'>{testimonials[0].name}</h3>
                                <h4 className='title'>{testimonials[0].title}</h4>
                            </div>
                        </li>

                        <li className={state.isActive2 ? "active" : ""}>
                            <div className='content-inner'>
                                <p className='quote'>{testimonials[1].quote}</p>
                                <h3 className='name'>{testimonials[1].name}</h3>
                                <h4 className='title'>{testimonials[1].title}</h4>
                            </div>
                        </li>

                        <li className={state.isActive3 ? "active" : ""}>
                            <div className='content-inner'>
                                <p className='quote'>{testimonials[2].quote}</p>
                                <h3 className='name'>{testimonials[2].name}</h3>
                                <h4 className='title'>{testimonials[2].title}</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div onClick={nextSlide} className='arrows right'>
                <span>
                    <img src='./right-arrow.SVG' alt='right arrow' />
                </span>
            </div>
        </div>
    </div>
  )
}

export default SliderAnimation