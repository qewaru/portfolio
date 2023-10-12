import React, { useState, useEffect } from 'react'
import { contact } from '../../../lib/data'

export default function Home() {
  const [ dimensions, setDimensions ] = useState({w: 0, h: 0})
  const [ shadow, setShadow ] = useState('0px 0px 15px rgba(110, 52, 203, .85)')

  const calc = () => {
    const section = document.getElementById('home')

    if (section) {
      const w = section.offsetWidth / 2
      const h = section.offsetHeight / 2
      setDimensions({w: w, h: h})
    }
  }

  useEffect(() => {
    calc()
  },[])

  const handleMouseMove = (event: React.MouseEvent) => {
    if (dimensions.w !== 0 && dimensions.h !== 0) {
      const deltaX = dimensions.w - event.clientX;
      const deltaY = dimensions.h - event.clientY;

      const shadowSizeX = deltaX / 20
      const shadowSizeY = deltaY / 20

      const newShadow = `${shadowSizeX}px ${shadowSizeY}px 20px rgba(110, 52, 203, .5)`;

      setShadow(newShadow);
    }

  }

  return (
    <section onMouseMove={(event) => handleMouseMove(event)} id="home" className="flex flex-col h-screen items-center gap-8 justify-center">
        <div style={{textShadow: shadow}} id='text' className="w-full text-9xl flex justify-center">HELLO</div>
        <div className="flex flex-col gap-7 text-4xl items-center">
          <div className='flex flex-col items-center gap-1'>
            <p>I'm <span className="text-accent">Artur</span></p>
            <p className='text-2xl'>a Junior <span className="text-accent">Full-Stack Developer</span></p>
          </div>
          <div className='flex flex-col items-center gap-1'>
            <p className="text-lg">Feel free to contact me</p>
            <div className='flex gap-3 text-xl justify-center'>
              {contact.map((item, index) => (
                <a href={item.link} key={index} className='p-2 flex items-center justify-center border-2 border-primary rounded-full hover:transition-all hover:duration-150 hover:bg-primary'>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
    </section>
  )
}