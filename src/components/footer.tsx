"use client";

import React from 'react'
import {  FaDiscord, FaFacebook, FaInstagram,} from 'react-icons/fa';
import {  FaYoutube } from 'react-icons/fa6';
import { FaPhoneSquareAlt } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="m-0">
          
    <div className="bg-black text-[#e6a837] md:flex md:justify-around md:text-sm
     items-center mx:px-2 px-5 md:mt-1 md:m-0 w-full grid grid-cols-3 gap-3 py-10 mt-1
    
    ">
        <div className="flex justify-center items-center">
           <FaInstagram className="w-12 h-12 rounded-full p-2" />
           <p className="text-xl font-semibold pl-2">
           <a href="https://www.instagram.com" target="_blank">Instagram </a>
           </p>
        </div>
     
        <div className="flex justify-center items-center">
           <FaFacebook className="w-12 h-12 rounded-full p-2" />
           <p className="text-xl font-semibold pl-2">
            <a href="https://www.facebook.com" target="_blank">Facebook</a>
            </p>
        </div>
       
        <div className="flex justify-center items-center">
           <FaDiscord className="w-12 h-12 rounded-full p-2" />
           <p className="text-xl font-semibold pl-2">
           <a href="https://www.discord.com" target="_blank">Discord</a>

           </p>
        </div>

        <div className="flex justify-center items-center">
         
           <FaYoutube className="w-12 h-12 rounded-full p-2" />
           <p className="text-xl font-semibold pl-2">
           <a href="https://www.youtube.com" target="_blank">Youtube</a>
             </p>
        </div>

        <div className="flex justify-center items-center">
        <FaPhoneSquareAlt className="w-14 h-14 rounded-full p-2" />
        <p className="text-xl font-semibold pl-2">
         <a href="http://localhost:3000/contact">Contact us on:+92-313-2254939</a>
         </p>
         </div>

         <p> <b> copyright &copy; 2024 all rights reserved </b> </p>
         
       </div>
    </div>
  )
};

export default Footer;