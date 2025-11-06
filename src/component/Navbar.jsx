import React,{useState} from 'react'
import { FaHamburger } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar  = () => {

    const [open,setOpen]= useState(false);     
    const [open1,setOpen2]= useState(false);
    const[nav,setNav]=useState(true)

    const handleNavbar = () =>{
       setNav(!nav);
    }
    const menu =["Menu01","Menu02","Menu03","Menu04"];
    const los =["Menu01","Menu02","Menu03","Menu04"];
    
  return (
    // <>

    // <h1 className='text-white'>My name is {nav==true ?"true" :"false"} </h1>
    // <button onClick={handleNavbar} className='text-black bg-white'>Click Me</button>
    
    // </>
    

    
    <div className="'fixed m-4 top-0 right-0 left-0 shadow-lg z-50 p-2 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 '>">
    <div className=' flex justify-between items-center h-16 '>
    <h1 className="text-3xl w-full  font-bold text-yellow-400 ">PortPolio </h1>
    <ul className="md:flex hidden md:mt-2 gap-4 cursor-pointer items-center  font-bold " >
        <li className="px-4"><Link to={'/' } className='text-white hover:transition-all translate-x-5 scale-105 duration-200 '>Home</Link></li>
        <li className='px-4  text-left relative text-white  ' onClick = {()=>setOpen(!open)}>Contact 
        
       
        {
            open && (
  <div className='bg-slate-500 text-center p-4 w-28 shadow-md absolute font-bold top-10 rounded-md text-green-500 ml-6 z-10'>
    {/* <ul>
      {menu.map((menu,index) => (
        <li className='hover:cursor-pointer hover:bg-black p-2' key={index}>
        {menu}
          
        </li>
      ))}
    </ul> */}
    <ul>
      {menu.map((menu,index) => (
        <li className='hover:cursor-pointer hover:bg-black p-2 ' key={index}>
        {menu}

        </li>

            )) }
    </ul>
  </div>
)}

        </li>
    
        <li className='px-4  text-left relative text-white  ' onClick = {()=>setOpen2(!open1)}>About 
        {
            open1 && (
  <div className='bg-slate-500 text-center p-4 w-28 shadow-md absolute font-bold top-10 rounded-md text-white ml-6'>
    <ul>
      {los.map((los) => (
        <li className='hover:cursor-pointer hover:bg-black p-2' key={los}>{los}
          
        </li>
      ))}
    </ul>
  </div>
)}
</li>
        <li className='px-4'><Link to={'/gallery' } className='text-white'>Gallery</Link>
        </li>
        <li className='px-4'><Link to={'/login' } className='text-white'>Login</Link></li>
    </ul>
    <div onClick={handleNavbar } className='block md:hidden'>
    {
        !nav==true ?<FaTimes size={24}/>:<FaHamburger size={24} className='cursor-pointer'/>
    }
    </div>

    {/* <div>
   
    <FaHamburger size={40} className='cursor-pointer' />
    

    </div> */}
    </div>
    
    
    <div className={!nav==true ?"fixed left-0 top-0 w-[30%]  border-r border-r-gray-700 h-screen bg-gray-700 lg:hidden z-50" :"fixed left-[-100%]"}>
    <h1 className="text-3xl w-full  font-bold text-green-600 m-4 ">Menue </h1>
    <ul className="pt-2 uppercase cursor-pointer " >
   
        {/* <li className="p-5 border-b  border-b-gray-500 ">Home</li> */}
        <li className="p-5 border-b border-b-gray-500"><Link to={'/' } className='text-white'>Home</Link></li>
        <li className='p-5 border-b border-b-gray-500'>Contact</li>
        <li className='p-5 border-b border-b-gray-500'>About</li>
        <li className='p-5 border-b border-b-gray-500'><Link to={'/gallery' } className='text-white'>Gallery</Link></li>
        {/* <li className='p-5 border-b border-b-gray-500'>Gallery</li> */}
        <li className='p-5 border-b border-b-gray-500' > <Link to={'/login' } className='text-white'>Login</Link></li>
    </ul>
    </div>
    

    
     </div>
  )
}

export default Navbar;