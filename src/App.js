import React from 'react'
import "./App.css";
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Main from './component/Main';
import Newsletter from './component/Newsletter';
import Cards from './component/Cards';
import Footer from './component/Footer';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Demo from './component/Demo';
import Find from './component/Find';
import Home from './component/Home';
import Login from './component/Login';


// function App() {
//   return (
//     <div className="App">npm 
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return(
    <>
   
    {/* <Navbar/>
    
    <Hero/>
    <Main/>
    <Newsletter/>
     <Cards/>
   
    <Home/>
    <Footer/> */}
    <BrowserRouter>
    <Navbar/>
    {/* <Login/> */}
    
    
    {/* <ul>
      <li>
        <Link to={'/'} className='text-white'>Home</Link>
      </li>
      <li>
        <Link to={'/yas'} className='text-white'>About</Link>
      </li>
    </ul> */}
  
      <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route path='/gallery' element={<Main/>}/>
      {/* <Route path='/login' element={<Footer/>}/> */}
      <Route path='/login' element={<Login/>}/>
      
      
      
       
        
      </Routes>
    </BrowserRouter>
   
    
    
   
    
   
    
    
    
    </>
  )
}
export default App;
