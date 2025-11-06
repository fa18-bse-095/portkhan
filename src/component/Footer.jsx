import React from 'react'
import{
    FaFacebook,
    FaIndustry,
    FaInfo,
    FaInternetExplorer,
    FaInstagram,
    
    
} from  "react-icons/fa";
import Main from './Main';

function Footer() {
  return (
    <>
    {/* <section>
    <div className='text-white w-full py-16 px-4'>
    <div className='max-w-[1140px] mx-auto grid lg:grid-cols-3'>
    <div className='lg:col-span-2'>
        <h1 className='md:text-3xl sm:text-4xl text-2xl py-3 uppercase font-bold'>Sign up for free</h1>
        <p>Everyone can sign up for free</p>
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-between '>
          <input className='p-3 flex w-full rounded-md text-black ' type='email' placeholder='Enter your email'></input>
          <button className='bg-slate-800 text-white rounded-md w-[200px] ml-4 my-6 px-6 py-2 '>Notification</button>
        </div>

    
   
    



    </div>
        
    </div>
    </section> */}
    <section>
        <div>
            {/* <Main/> */}
        </div>
    </section>
    
    <div className='max-w-[1240px] grid lg:grid-cols-3 mx-auto py-10 px-4 gap-10 text-justify rounded-2xl'>
    <div className=' hover:scale-105 duration-200'>
    <h1 className='text-3xl text-green-500 uppercase my-8 border-b '>Imran khan</h1>
    <p className='text-white text-justify text-xl  bg-slate-600 '>
    Imran Ahmed Khan Niazi is a Pakistani politician and former cricketer who served as the 22nd prime minister of Pakistan from August 2018 until April 2022. He is the founder and former chairman of the political party Pakistan Tehreek-e-Insaf from 1996 to 2023

    </p>
    <div className='bg-white flex justify-between md:w-[100%] shadow-xl my-6 cursor-pointer'>
    <FaFacebook size={30}/>
    <FaIndustry size={30}/>
    <FaInternetExplorer size={30}/>
    <FaInfo size={30}/>
    <FaInstagram size={30}/>
    

   
       
    </div>

    </div>
    <div className='lg:col-span-2 flex justify-between mt-20'>
    <div>
        <h6 className='text-white  text-2xl uppercase'>Data</h6>
        <ul className='text-white'>
            <li className='py-2 text-sm'>Demo data one</li>
            <li className='py-2 text-sm'>Demo data one</li>
            <li className='py-2 text-sm'>Demo data one</li>
            <li className='py-2 text-sm'>Demo data one</li>
            <li className='py-2 text-sm'>Demo data one</li>
        </ul>
        </div>
        <div>
        <h6 className='text-white  text-2xl uppercase'>Data</h6>
        <ul className='text-white'>
            <li className='py-2 text-sm'>Demo data one</li>
            <li className='py-2 text-sm'>Demo data one</li>
            <li className='py-2 text-sm'>Demo data one</li>
            <li className='py-2 text-sm'>Demo data one</li>
            <li className='py-2 text-sm'>Demo data one</li>
        </ul>
        </div>
        <div>
        <h6 className='text-white  text-2xl uppercase'>Data</h6>
        <ul className='text-white'>
            <li className='py-2 text-sm'>Demo data one</li>
            <li className='py-2 text-sm'>Demo data one</li>
            <li className='py-2 text-sm'>Demo data one</li>
            <li className='py-2 text-sm'>Demo data one</li>
            <li className='py-2 text-sm'>Demo data one</li>
        </ul>
        </div>
        <div>
        <h6 className='text-white  text-2xl uppercase '>Data</h6>
        <ul className='text-white'>
            <li className='py-2 text-sm'>Demo data one</li>
            <li className='py-2 text-sm'>Demo data one</li>
            <li className='py-2 text-sm'>Demo data one</li>
            <li className='py-2 text-sm'>Demo data one</li>
            <li className='py-2 text-sm'>Demo data one</li>
        </ul>
        </div>
    </div>
    
        
    </div>
    </>
  )
}

export default Footer