import React from 'react'
import qr from "../assets/images/image-qr-code.png"

const Content = () => {
  return (
    <section className='w-[80%] mx-auto my-[10%] flex flex-col items-center space-y-2 bg-White rounded-lg md:w-[40%]'>
        <img src={qr} alt="qr" className='p-4 max-w-full rounded-3xl'/>
        <h1 className='text-center text-Darkblue font-bold text-xl px-2'>Improve your front-end skills by building projects</h1>
        <p className='text-center px-4 text-Grayishblue pb-4'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </section>
  )
}

export default Content