import React from 'react'
import './sliderAnimationStyle.scss'
import { testimonials } from '../../utils/testmonials'

const SliderAnimation = () => {
  return (
    <div className='testimonial-section'>
        <div className='testimonial-container'>
            <div className='arrows left'>
                <span>
                    <img src='./left-arrow.SVG' alt='left arrow' />
                </span>
            </div>

            <div className='inner'>
                <div className='t-image'>
                    <ul style={{listStyleType: "none"}}>
                        <li>
                            <img src={testimonials[0].image} alt={testimonials[0].name} />
                        </li>

                        <li>
                            <img src={testimonials[1].image} alt={testimonials[1].name} />
                        </li>

                        <li>
                            <img src={testimonials[2].image} alt={testimonials[2].name} />
                        </li>
                    </ul>
                </div>

                <div className='t-content'>
                    <ul style={{listStyleType: "none"}}>
                        <li>
                            <div className='content-inner'>
                                <p className='quote'>{testimonials[0].quote}</p>
                                <h3 className='name'>{testimonials[0].name}</h3>
                                <h4 className='title'>{testimonials[0].title}</h4>
                            </div>
                        </li>

                        <li>
                            <div className='content-inner'>
                                <p className='quote'>{testimonials[1].quote}</p>
                                <h3 className='name'>{testimonials[1].name}</h3>
                                <h4 className='title'>{testimonials[1].title}</h4>
                            </div>
                        </li>

                        <li>
                            <div className='content-inner'>
                                <p className='quote'>{testimonials[2].quote}</p>
                                <h3 className='name'>{testimonials[2].name}</h3>
                                <h4 className='title'>{testimonials[2].title}</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='arrows right'>
                <span>
                    <img src='./right-arrow.SVG' alt='right arrow' />
                </span>
            </div>
        </div>
    </div>
  )
}

export default SliderAnimation