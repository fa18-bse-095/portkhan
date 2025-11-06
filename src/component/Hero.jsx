import React from 'react'
import { ReactTyped,Typed } from "react-typed";

function Hero() {
  return (
    <div className='text-white'>
    <div className='max-w-[700px]  w-full h-screen mx-auto text-center flex flex-col justify-center'>
    <p className='text-green-500 font-bold p-2 font-serif text-4xl uppercase'>hello i am</p>
    <h1 className='md:text-6xl sm:text-4xl text-2xl md:text-amber-400 sm:text-blue-400 uppercase'>Yasin Khan</h1>
    <div className=''>
        <p className='md:text-3xl sm:2xl:font-bold md:text-green-500 uppercase '>Web shahid king</p>
       
    </div>
    <p className='text-gray-500 font-bold'>Imran Ahmed Khan Niazi is a Pakistani politician and former cricketer who served as the 22nd prime minister of Pakistan from August 2018 until April 2022. He is the founder and former chairman of the political party Pakistan Tehreek-e-</p>
    <button className='bg-green-500 w-[150px] py-3 rounded-lg font-bold my-6 mx-auto text-black hover:scale-105 duration-200'>More Detail</button>
  

    </div>
    
        
    </div>

  )
}

export default Hero