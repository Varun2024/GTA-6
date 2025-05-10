import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  let [showContent, setShowContent] = useState(false)

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",

    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() > 0.9) {
          document.querySelector('.svg').remove();
          setShowContent(true);
          this.kill();
        }
      }
    })
  })

  return (
    <>
      <div className="svg fixed top-0 left-0 z-[2] w-full h-screen overflow-hidden bg-black">
        {/* cool use of svg */}
        <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
          <defs>
            <mask id='viMask'>
              <rect x='0' y='0' width='100%' height='100%' fill='black' />
              <g className='vi-mask-group'>
                <text
                  x='50%'
                  y='50%'
                  textAnchor='middle'
                  fill='White'
                  fontSize='250'
                  fontFamily='Arial Black'
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href='./bg.png'
            width='100%'
            height='100%'
            preserveAspectRatio='xMidYMid slice'
            mask='url(#viMask)'
          />
        </svg>
      </div>
      {showContent &&
        <div className="main w-full">
          <div className="landing w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-6 px-6 ">
              <div className="logo flex gap-7">
                <div className="lines pt-2.5 flex flex-col gap-[5px]">
                  <div className="line w-15 h-1.5 bg-white"></div>
                  <div className="line w-8 h-1.5 bg-white"></div>
                  <div className="line w-5 h-1.5 bg-white"></div>
                </div>
                <h3 className='text-4xl text-white leading-none'>Rockstar</h3>
              </div>
            </div>
            <div className="imagesdiv relative w-full h-screen overflow-hidden">
              {/* absolute makes em stake on each other an iv above is realtive containing them */}
              <img src="./sky.png" className='absolute top-0 left-0 w-full h-full object-cover' alt="" />
              <img className='absolute top-0 left-0 w-full h-full object-cover' src="./bg.png" alt="" />
              <img className='absolute -bottom-110 -translate-x-1/2 left-1/2  scale-[.9]' src="./girlbg.png" alt="" />

            </div>
            {/* grate transparent thingy here */}
            <div className="btmbar text-white absolute bottom-0 left- w-full py-8 px-6 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                {/* remixicon - opensource lib for icons */}
                <i class="ri-arrow-down-line text-4xl"></i>
                <h3 className='font-[Helvetica] text-xl' >Scroll down</h3>
              </div>
              <img src="./ps5.png" className='absolute top-1/2 left-1/2 -translate-1/2 h-[50px]' alt="" />
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default App