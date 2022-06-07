import React, {useRef, useEffect} from 'react'
import {gsap} from 'gsap'
import logo from '../logo.svg';
import '../App.css';

const Home = () => {
  let logoItem = useRef(null)
  let textItem = useRef(null)
  
  useEffect(() => {
    console.log(logoItem)
    gsap.to(logoItem, {duration: 2, opacity: 1, y: -20, ease: "power3.easeOut"})

    gsap.to(textItem, {duration: 2, opacity: 1, y: -20, ease: "power3.easeOut", delay: .5})
  }, [])

  return (
    <div className='App'>
      <header className="App-header">
        <img 
        ref={el => {logoItem = el}}
        src={logo} className="App-logo" alt="logo" />
        <p ref={el => {textItem = el}}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href='/circle-animation'>Circle Animation</a>
        <a href='/image-loading'>Image Loading</a>
      </header>
    </div>
  )
}

export default Home