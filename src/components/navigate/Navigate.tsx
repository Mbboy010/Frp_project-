import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

import Aside from '../aside/Aside';
import { IoIosMenu } from "react-icons/io";
import {MoonIcon} from "../../components/svg/MoonIcon";
import {SunIcon} from "../../components/svg/SunIcon";
import type { RootState } from '../../components/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setIsAside } from "../redux/slicer/AsideCheck"
import { setPosit } from "../redux/slicer/posit"
import { setOpacity } from "../redux/slicer/opacity"



export default function Navigate() {
  
  const dispatch = useDispatch()
  
  const [mounted, setMounted] = useState<boolean>(false)
  const [posi,setPosi] = useState<string>("-79vw")
  
  
  
  
  
  
  const handleAside = () => {
    
   dispatch(setIsAside(true))
    
    setTimeout(() =>{
      dispatch(setOpacity("100"))
      dispatch(setPosit("0vw"))
    },10)
    
   
   
   
 }
  
  return (
    <div>
       <Aside setPosi={setPosi} posi={posi} />
    <div className="fixed w-full backdrop-blur-md bg-[#76767625] h-[4.5rem]">
     
   <div className="relative justify-between items-center flex flex-row h-full w-full">
   
   <div className="ml-2 flex justify-center items-center">
   <Link className="ml-2 flex justify-center items-center" to="/">
   <img className="w-[3rem]" src={require('../../assist/Logos.png')} alt="logo"/>
   <h1 className="ml-1 text-[1.5rem] text-green-500 font-semibold">FRPFILES</h1>
   </Link>
   
   </div>
   
   <div className="mr-2 flex flex-row gap-2 justify-center items-center">
   
   <div className="h-full flex justify-center items-center">
     
   </div>
   
   <div>


   <IoIosMenu onClick={handleAside}  className="text-[2.5rem]" />

   </div>
   
   
   </div>
   
   </div>
   </div>
   
    </div>
  )
}