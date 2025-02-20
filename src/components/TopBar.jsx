
import { navItems } from './Constants'
import logo from '../assets/main/navlogo.png'
import { Link } from 'react-router-dom'
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { useState } from 'react';
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [mobiledrawer,Setmobiledrawer]=useState(false)
  const toggleNavbar=()=>{
    Setmobiledrawer(!mobiledrawer)
  }
  return (
    <>
      <nav className='fixed top-0 z-50 w-full px-20 text-black '>
        <div className="flex justify-between items-center px-4 py-3 mx-auto relative navbar-main  ">
          <div className='flex items-center flex-shrink-0 flex-row '>
            <img src={logo} alt="" className='h-20 w-30 mr-2' />
            <span className='text-2xl tracking-tight '>Nerd Learn</span>
          </div>
          <ul className='hidden lg:flex mr-20 space-x-12'>
            {
              navItems.map((items, index) => (
                <Link to={items.href} key={index}> <li className='text-lg font-semibold' >{items.label}</li></Link>
              ))
            }
          </ul>
          <div>

            <Link to='/create'>
              <button className='hidden lg:flex text-white contact-btn p-3 text-xl mr-15 rounded-md duration-500  flex items-center'>
              <p className='text-3xl'><RiDashboardHorizontalLine /></p><p className=''>Dashboard</p>
              </button>
            </Link>
           
      
          </div>

         
       
        </div>
        
          <div className="lg:hidden md:flex ">
               <button onClick={toggleNavbar} className='text-black tonggle-icon' >
                    {mobiledrawer ? <X /> : <Menu />}
               </button>
            </div>
            {
            mobiledrawer && (
              <div className="sticky right-0 z-20  w-full p-12 flex flex-col justify-center items-center lg:hidden mobile-navbar ">
              {
              navItems.map((items, index) => (
                <Link to={items.href} key={index}> 
                <ul>
                <Link to={items.href} key={index}>  <li className='py-4  list-none text-lg font-semibold' >{items.label}</li></Link>
                </ul>
                </Link>
              ))
            }
            
            <Link to='/create'>
              <button className='hidden lg:flex text-white contact-btn p-3 text-xl mr-15 rounded-md duration-500  flex items-center'>
              <p className='text-3xl'><RiDashboardHorizontalLine /></p><p className=''>Dashboard</p>
              </button>
            </Link>
              </div>
              
            )
          }
      </nav>
      
      <div className="top-to-bottom p-3 rounded-full text-2xl text-black cursor-pointer	" >

    <AiFillHome />

            
      </div>

    </>
  )
}

export default NavBar