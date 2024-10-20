"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png" ;
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className="flex justify-between">
      <div>
        <Image
          className="
          w-[130px] h-[50px] ml-[-25px]
          sm:w-[140px] sm:h-[70px] sm:ml-[-20px] 
          md:w-[100px] md:h-[80px] md:ml-[-5px] object-contain"
          src={logo}
          alt="logo"
          
        />
        
      </div>
      {/* {Links} */}
      <nav>
        <ul className="flex gap-8 mr-5">
          <li>
            <Link href="/">  <Button className="w-full py-2 px-4 bg-[#e6a837] text-white rounded-md">Home</Button>  </Link>
          </li>
          <li>
            <Link href="../about"> <Button className="w-full py-2 px-4 bg-[#e6a837] text-white rounded-md">About</Button> </Link>
          </li>

          <li>
            <Link href="../contact">  <Button className="w-full py-2 px-4 bg-[#e6a837] text-white rounded-md">Contact</Button> </Link> 
          </li>
         
          <li>
            <Link href="../joinnow">  <Button className="w-full py-2 px-4 bg-[#e6a837] text-white rounded-md">JoinNOw</Button></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
