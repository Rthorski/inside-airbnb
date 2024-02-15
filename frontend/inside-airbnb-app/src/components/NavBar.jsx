import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { SocialIcon } from 'react-social-icons';

const NavBar = () => {

  const navElements = ["Data", "About", "Support", "Organise", "Donate!"]

  const renderNavItems = () => {
    return navElements.map((element, index) => (
      <li key={index}>
        <a href="" className=''>{element}</a>
      </li>
    ));
  };

  return (
    <nav className="flex justify-between items-center p-5">
      <div className='flex w-1/2 justify-between items-center'>
        <div className="flex justify-center items-center flex-col">
            <div className="text-2xl font-extrabold text-sky-950">Inside Airbnb</div>
            <div className='text-xs font-extrabold text-sky-950'>Adding data to the debate</div>
        </div>
        <div className="flex items-center"></div>
          <div className="mr-6 text-sky-400 font-semibold">Data</div>
          <div className="mr-6 text-sky-400 font-semibold">About</div>
          <div className="mr-6 text-sky-400 font-semibold">Support</div>
          <div className="mr-6 text-sky-400 font-semibold">Organise</div>
        <div className="bg-sky-900 rounded-md text-white mr-6 px-3 py-2">Donate!</div>
      </div>
      <div className="flex items-center">
        <div className=''><SocialIcon network='facebook' style={{ height: 27, width: 27 }}></SocialIcon></div>
        <div className=''><SocialIcon network='twitter' style={{ height: 27, width: 27 }}></SocialIcon></div>

      </div>
    </nav>
  )
};



export default NavBar

  //   <div className="flex items-center"></div>
  
  //     { <div className="mr-6">Data</div>
  //     <div className="mr-6">About</div>
  //     <div className="mr-6">Support</div>
  //     <div className="mr-6">Organise</div>
  //     <div className="mr-6">Donate!</div> }
  
  
  // <div className="flex items-center">
  //   <div>logo</div>
  
  // </div>
  
  
  
  


