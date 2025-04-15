import ResetIphoneGuide from './ResetIphoneGuide';
import FactoryResetGuide from './FactoryResetGuide';
import { BiCodeAlt } from "react-icons/bi";
import { BsCaretRightFill } from "react-icons/bs";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoLogoAndroid } from "react-icons/io";

import React,{useRef} from "react"
import { AiFillAppstore } from "react-icons/ai";


export default function Accounting() {
  
  
  
  
  return (
    <div className="flex flex-col gap-3 justify-center items-center my-4">
      <div style={{
        
        
      }} className="w-[95%]  flex   flex-col   rounded 
       bg-gray-800"
      
      >
      
        <div className="flex mt-3 ml-5 flex-row items-center gap-5 ">
        <div className="w-10 rounded-full h-10 bg-blue-500 flex justify-center items-center">
        <IoLogoAndroid className=" drop-shadow-lg text-gray-200  shadow-white text-2xl font-black" />
        </div>
        <h1 className="text-1xl capitalize text-gray-200  font-black">Android phone</h1>
        </div>
        <div className="mx-5 my-5 ">
        <FactoryResetGuide />

        </div>
      </div>
      
     
    </div>
  )
}

