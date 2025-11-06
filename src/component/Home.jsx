import React from 'react'
import ko from "../Assets/dol 3.png"
import lg from "../Assets/fr.png"
import firstimg from "../Assets/dol.png"
import { ReactTyped,Typed } from "react-typed";
import{
  FaFacebook,
  FaIndustry,
  FaInfo,
  FaInternetExplorer,
  FaInstagram,
  
  
} from  "react-icons/fa";
import Login from './Login';

function Home() {
  return (
    <>
        <div>
        <div className='text-white navbar'>
    <div className='max-w-[700px]  w-full h-screen mx-auto text-center flex flex-col justify-center'>
    <p className='text-green-500 font-bold p-2 font-serif text-4xl uppercase'>hello i am</p>
    <h1 className='md:text-6xl sm:text-4xl text-2xl md:text-amber-400 sm:text-blue-400 uppercase'>Yasin Khan</h1>
    <div className=''>
        <p className='md:text-3xl sm:2xl:font-bold md:text-green-500 uppercase '>Web developer</p>
        <ReactTyped 
        className='md:text-3xl   md:text-amber-700 text-2xl font-bold pl-2 sm:text-green-500 hover:cursor-pointer'
          
          strings={["Web developer","Hacker","Mastermind","Dangerous"]}
          typeSpeed={80}
          backSpeed={10}
          loop={true}
          showCursor ={false}
        
        />
    </div>
    <p className='text-white font-bold'>Imran Ahmed Khan Niazi is a Pakistani politician and former cricketer who served as the 22nd prime minister of Pakistan from August 2018 until April 2022. He is the founder and former chairman of the political party Pakistan Tehreek-e-</p>
    <button className='bg-green-500 w-[150px] py-3 rounded-lg font-bold my-6 mx-auto text-black hover:scale-125 duration-700'>More Detail</button>
  

    </div>
    
        
    </div>
    <section>
    <div className='w-full  px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-10 '>
          <div className='w-full shadow-xl  flex flex-col p-4 rounded-lg hover:scale-105 duration-200 my-2 bg-pink-500'>
            <img src={firstimg} className='w-24 mx-auto mt-[-16px] bg-white'></img>
            <h2 className='font-bold text-2xl text-center py-5'>Minimal</h2>

            <div className='text-center'>
              <p className='py-2 mx-3 font-bold border-b'>Feature one</p>
              <p className='py-2 mx-3 font-bold border-b'>Feature two</p>
              <p className='py-2 mx-3 font-bold border-b' >Feature three</p>
              <p className='py-2 mx-3 font-bold border-b'>Feature four</p>
            </div>
            <button className='rounded-md  bg-green-600 text-white font-bold my-6 mx-auto px-6 py-3'>Request Offer</button>
          </div>
          <div className='w-full shadow-xl bg-gray-600 flex flex-col p-4 rounded-lg hover:scale-105 duration-200 my-2'>
            <img src={ko} className='w-24 mx-auto mt-[-16px] bg-white'></img>
            <h1 className='font-bold text-2xl text-center py-5 '>Burger</h1>
            <div className='text-center'>
              <p className='py-2 mx-3 font-bold border-b'>Feature one</p>
              <p className='py-2 mx-3 font-bold border-b'>Feature two</p>
              <p className='py-2 mx-3 font-bold border-b' >Feature three</p>
              <p className='py-2 mx-3 font-bold border-b'>Feature four</p>
            </div>
            <button className='rounded-md  bg-green-600 text-white font-bold my-6 mx-auto px-6 py-3'>Request Offer</button>
          </div>
          <div className='w-full shadow-xl bg-yellow-500 flex flex-col p-4 rounded-lg hover:scale-105 duration-200 my-2'>
            <img src={lg} className='w-24 mx-auto mt-[-16px]'></img>
            <p className='font-bold text-2xl text-center py-5'>French Currency</p>
            <div className='text-center'>
              <p className='py-2 mx-3 font-bold border-b'>Feature one</p>
              <p className='py-2 mx-3 font-bold border-b'>Feature two</p>
              <p className='py-2 mx-3 font-bold border-b' >Feature three</p>
              <p className='py-2 mx-3 font-bold border-b'>Feature four</p>
            </div>
            <button className='rounded-md  bg-green-600 text-white font-bold my-6 mx-auto px-6 py-3'>Request Offer</button>

          </div>
        </div>

      </div>
    </section>

    <section>
    <div className='text-white w-full py-16 px-4 bg-gradient-to-r from-red-500 to-green-600 '>
    <div className='max-w-[1140px] mx-auto grid lg:grid-cols-3'>
    <div className='lg:col-span-2'>
        <h1 className='md:text-3xl sm:text-4xl text-2xl py-3 uppercase font-bold'>Sign up for free</h1>
        <p>Everyone can sign up for free</p>
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-between '>
          <input className='p-3 flex w-full rounded-md text-black ' type='email' placeholder='Enter your email'></input>
          <button className='bg-slate-800 text-white rounded-md w-[200px] ml-4 my-6 px-6 py-2 transition translate hover:scale-105 duration-200 '>Notification</button>
        </div>

    
   
    



    </div>
        
    </div>
    </section>

    <section>
    <div className='max-w-[1240px] grid lg:grid-cols-3 mx-auto py-10 px-4 gap-10 text-justify rounded-2xl'>
    <div className=' hover:scale-105 duration-200'>
    <h1 className='text-3xl text-green-500 uppercase my-8 border-b '>Imran khan</h1>
    <p className='text-white text-justify text-xl  '>
    Imran Ahmed Khan Niazi is a Pakistani politician and former cricketer who served as the 22nd prime minister of Pakistan from August 2018 until April 2022. He is the founder and former chairman of the political party Pakistan Tehreek-e-Insaf from 1996 to 2023

    </p>
    <div className=' flex justify-between md:w-[100%] shadow-xl my-6 cursor-pointer'>
    <FaFacebook className='fill-blue-500 hover:scale-125 duration-150' size={30}/>
    <FaIndustry className='fill-green-500 hover:scale-125 duration-150' size={30}/>
    <FaInternetExplorer className='fill-yellow-500 hover:scale-125 duration-150' size={30}/>
    <FaInfo className='fill-red-500 hover:scale-125 duration-150' size={30}/>
    <FaInstagram className='fill-pink-800 hover:scale-125 duration-150' size={30}/>
    

   
       
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
    </section>
    <section>
      
    </section>
            
        </div>
    </>
  )
}

export default Home