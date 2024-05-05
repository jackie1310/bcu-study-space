import React from "react";
import {
  RxDiscordLogo,
} from "react-icons/rx";

import { FaFacebook, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
  <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
  <div className="w-full flex flex-col items-center justify-center m-auto">
      <div className="w-full flex flex-row items-start justify-around flex-wrap">

          <div className="w-[10%] h-auto flex flex-col items-start justify-start">
              <div className="font-bold text-[16px] mb-[15px]">Contact</div>
              <a href="facebook.com" className="h-auto w-auto flex flex-row items-center my-[15px] cursor-pointer">
                  <FaFacebook href="www.facebook.com/groups/259336766873450" />
                  <span className="text-[15px] ml-[6px]">Facebook</span>
              </a>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  <FaPhone />
                  <span className="text-[15px] ml-[6px]">113</span>
              </p>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  <RxDiscordLogo />
                  <span className="text-[15px] ml-[6px]">Discord</span>
              </p>
          </div>
          <div className="w-[40%] h-auto flex flex-col items-center justify-auto text-[20px] ">
              <p className="items-center font-light text-center">"We always hope to help students with the same passion to meet, interact, discuss and share with each other to hone their professional skills and have conditions to develop themselves and share experiences. Let's accompany the Study Committee and work towards the common goal of Sharing is Learning."</p>
              <p className="items-center font-light text-center">-Me</p>
            <div className="w-[50%] h-auto flex flex-col items-center justify-auto">
                    
            </div>
          </div>
            </div>
        </div>
    </div>
  )
}

export default Footer