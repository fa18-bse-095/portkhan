import React from 'react'
import firstimg from "../Assets/dol.png"
import ko from "../Assets/dol 3.png"
import lg from "../Assets/fr.png"

const Cards = () => {
  return (
    <>
      <div className='w-full py-[150px] px-4 bg-white'>
        <div className='max-w-[1240px]  mx-auto lg:grid-cols-3 gap-10 '>
          <div className='w-full shadow-xl  flex flex-col p-4 rounded-lg hover:scale-105 duration-200 my-2 bg-pink-500'>
            <img src={firstimg} className='w-32 mx-auto mt-[-46px] bg-white'></img>
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
            <img src={ko} className='w-32 mx-auto mt-[-48px] bg-white'></img>
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
            <img src={lg} className='w-32 mx-auto mt-[-46px]'></img>
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
    </>
  )
}

export default Cards;