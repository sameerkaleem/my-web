import React from 'react';
import {  FaDiscord, FaFacebook, FaInstagram,} from 'react-icons/fa';
import {  FaYoutube } from 'react-icons/fa6';
import { FaPhoneSquareAlt } from "react-icons/fa";

 const Contact = () => {
      return (
        <div className="md:flex md:justify-around md:text-sm
        items-center mx:px-2 px-5 md:mt-1 md:m-0 w-full grid grid-cols-3 gap-3 py-10 mt-1
       
       ">
        <h1 className=" flex justify-center items-center text-2xl font-semibold pl-2" >
        Contact Us
CALL/TEXT: <br/>
(+92-313)-2254939

<br></br>

EMAIL: sameerkaleem@gmail.com
<br></br>

FAX: +92-313-746-6609
<br></br>

Address: North Nazimabad Karachi Pakistan

Connect With Us on Social Media!

        </h1>
      
        <div className="flex justify-center items-center text-[#f5357e] ">
        <FaInstagram className="w-12 h-12 rounded-full p-2" />
        <p className="text-xl font-semibold pl-2">
        <a href="https://www.instagram.com" target="_blank">Instagram </a>
        </p>
     </div>
  
     <div className="flex justify-center items-center text-[#3674e7] ">
        <FaFacebook className="w-12 h-12 rounded-full p-2" />
        <p className="text-xl font-semibold pl-2">
         <a href="https://www.facebook.com" target="_blank">Facebook</a>
         </p>
     </div>
    
     <div className="flex justify-center items-center text-[#3751e6e0] ">
        <FaDiscord className="w-12 h-12 rounded-full p-2" />
        <p className="text-xl font-semibold pl-2">
        <a href="https://www.discord.com" target="_blank">Discord</a>

        </p>
     </div>

     <div className="flex justify-center items-center text-[#f53943ee] ">
      
        <FaYoutube className="w-12 h-12 rounded-full p-2" />
        <p className="text-xl font-semibold pl-2">
        <a href="https://www.youtube.com" target="_blank">Youtube</a>
          </p>
     </div>

     <div className="flex justify-center items-center">
     <FaPhoneSquareAlt className="w-36 h-36 rounded-full p-2" />
     <p className="text-xl font-semibold pl-2"> </p>
     <a href="http://localhost:3000/contact" target="_blank">contact us on:+92-313-22549393</a>
      </div>
      </div>
      );
    };
    
    export default Contact;
