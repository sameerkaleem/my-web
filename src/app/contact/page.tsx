import React from 'react';
import { FaDiscord, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa6';
import { FaPhoneSquareAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-around py-10 px-5 md:px-10 w-full">
      {/* Contact Information */}
      <div className="text-center md:text-left mb-10">
        <h1 className="text-2xl font-semibold mb-5">Contact Us</h1>
        <p className="text-base leading-relaxed">
          CALL/TEXT: <br />
          (+92-313)-2254939
          <br />
          <br />
          EMAIL: sameerkaleem@gmail.com
          <br />
          <br />
          FAX: +92-313-746-6609
          <br />
          <br />
          Address: North Nazimabad Karachi Pakistan
        </p>
        <h2 className="mt-8 text-xl font-semibold">Connect With Us on Social Media!</h2>
      </div>

      {/* Social Media Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col items-center">
          <FaInstagram className="w-12 h-12 text-[#f5357e]" />
          <a href="https://www.instagram.com" target="_blank" className="text-lg font-semibold mt-2">
            Instagram
          </a>
        </div>

        <div className="flex flex-col items-center">
          <FaFacebook className="w-12 h-12 text-[#3674e7]" />
          <a href="https://www.facebook.com" target="_blank" className="text-lg font-semibold mt-2">
            Facebook
          </a>
        </div>

        <div className="flex flex-col items-center">
          <FaDiscord className="w-12 h-12 text-[#3751e6]" />
          <a href="https://www.discord.com" target="_blank" className="text-lg font-semibold mt-2">
            Discord
          </a>
        </div>

        <div className="flex flex-col items-center">
          <FaYoutube className="w-12 h-12 text-[#f53943]" />
          <a href="https://www.youtube.com" target="_blank" className="text-lg font-semibold mt-2">
            Youtube
          </a>
        </div>
      </div>

      {/* Phone Contact */}
      <div className="flex flex-col items-center mt-10">
        <FaPhoneSquareAlt className="w-12 h-12 text-[#333]" />
        <p className="text-lg font-semibold mt-2">
          <a href="tel:+92-313-22549393" className="hover:underline">
            Contact us on: +92-313-22549393
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
