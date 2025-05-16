import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  let [showContent, setShowContent] = useState(false)

  useGSAP(() => {
    // this gsap will run only once
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
          // showContent true hoga toh main render hoga
          setShowContent(true);
          this.kill();
        }
      }
    })
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -1,
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: -.8,
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: -.8,
      ease: "Expo.easeInOut",
    });
    gsap.to(".character", {
      scale:.75,
      rotate: 0,
      x:'-50%' ,
      bottom: '-65%',
      duration: 2,
      delay: -.8,
      ease: "Expo.easeInOut",
    });
    gsap.to(".text", {
      scale:1,
      rotate: 0,
      duration: 2,
      delay: -.8,
      ease: "Expo.easeInOut",
    });
    

    

    // this is for the mouse movement
    const main = document.querySelector('.main');

    // shuruat mai main exist nhi krega, exist tb krega jb showContent true hoga
    main?.addEventListener('mousemove', function (e) {
      // the .5 is to center the mouse movement as 0 starts from left and 1 from right
      // so we need to center it
      // and 40 is the max movement of the image
      // so if mouse moves to left, image will move to left and vice versa
      // so we need to center it
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", {
        x: `${xMove * .4}% `,
      })
      gsap.to(".sky", {
        x: xMove,
      })
      gsap.to(".bg", {
        x: xMove * 1.7,
      })
    })

  }, [showContent]);

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
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative  w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-6 px-6 ">
              <div className="logo flex gap-7">
                <div className="lines pt-2.5 flex flex-col gap-[5px]">
                  <div className="line w-15 h-1.5 bg-white"></div>
                  <div className="line w-8 h-1.5 bg-white"></div>
                  <div className="line w-5 h-1.5 bg-white"></div>
                </div>
                <h3 className='text-3xl text-white leading-none'>Rockstar</h3>
              </div>
            </div>

            <div className="imagesdiv relative w-full h-screen overflow-hidden">
              {/* absolute makes em stake on each other an iv above is realtive containing them */}
              <img 
              src="./sky.png" 
              className='scale-[1.7] rotate-[-20deg] sky absolute top-0 left-0 w-full h-full object-cover' 
              alt="" />
              <img 
              className='bg scale-[1.8] rotate-[-5deg] absolute top-0 left-0 w-full h-full object-cover' 
              src="./bg.png" 
              alt="" />
              <div className="text text-white flex flex-col gap-4 absolute top-0 left-1/2 -translate-x-1/2 scale-[1.5] rotate-[-10deg]"> 
                <h1 className='text-[6.5rem] leading-none -ml-30'>grand</h1>
                <h1 className='text-[6.5rem] leading-none ml-10'>theft</h1>
                <h1 className='text-[6.5rem] leading-none  -ml-10'>auto</h1>
              </div>
              <img 
              className='absolute character -bottom-[300%] -translate-x-1/2 left-1/2  scale-[3] rotation-[-20deg]' 
              src="./girlbg.png" 
              alt="" />
            </div>
            {/* great transparent thingy here */}
            <div className="btmbar text-white absolute bottom-0 left- w-full py-8 px-6 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                {/* remixicon - opensource lib for icons */}
                <i className="ri-arrow-down-line text-4xl"></i>
                <h3 className='font-[Helvetica] text-xl' >Scroll down</h3>
              </div>
              <img src="./ps5.png" className='absolute top-1/2 left-1/2 -translate-1/2 h-[50px]' alt="" />
            </div>
          </div>
          <div className="bg-black flex items-center justify-center px-10 w-full h-screen overflow-hidden">
            <div className="cntnr flex text-white w-full h-[80%] ">
              <div className="relative limg w-1/2 h-full">
                <img className=' absolute top-1/2 left-1/2 -translate-1/2 ' src="./imag.png" alt="" />
              </div>
              <div className="rg w-[35%] py-20">
                <h1 className='text-5xl'>Still running</h1>
                <h1 className='text-5xl'>Not hunting</h1>
                <p className='mt-10 text-l font-[Helvetica_Now_Display]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cumque facere quas hic labore deserunt consequuntur iste reprehenderit. Laboriosam cupiditate quos necessitatibus doloribus.
                </p >
                <p className='mt-4 text-l font-[Helvetica_Now_Display]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolore fugiat, architecto quae asperiores ducimus deleniti, vitae, eveniet maxime sed dignissimos. Quibusdam, voluptate corrupti dignissimos similique amet delectus praesentium assumenda dolore eligendi perferendis nostrum veniam.</p>
                <p className='mt-4 text-l font-[Helvetica_Now_Display]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolore fugiat, architecto quae asperiores ducimus deleniti, vitae, eveniet maxime sed dignissimos. Quibusdam, voluptate corrupti dignissimos similique amet delectus praesentium assumenda dolore eligendi perferendis nostrum veniam.</p>
                <button className='bg-yellow-500 mt-10 px-5 py-5   text-2xl text-black'>Download Now</button>
              </div>
            </div>

          </div>
        </div>
      }
    </>
  )
}

export default App