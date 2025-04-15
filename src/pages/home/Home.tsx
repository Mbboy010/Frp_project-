import Accounting from '../../components/home/Accounting';
import FactoryResetGuide from '../../components/home/FactoryResetGuide';
import BypassAndroid from '../../components/home/BypassAndroid';

import React,{useState, useEffect} from 'react'



import type { RootState } from '../../components/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setIsAside } from "../../components/redux/slicer/AsideCheck"
import { setOpacity } from "../../components/redux/slicer/opacity"
import { setPosit } from "../../components/redux/slicer/posit"



export default function Home() {
  
  const isAside = useSelector((state: RootState) => state.isAs.value) 
 const opacity = useSelector((state: RootState) => state.opacity.value) 
 
 const dispatch = useDispatch()
  
  useEffect(() => {
    
  dispatch(setOpacity("0"))
  dispatch(setPosit("-79vw"))
    
  setTimeout(() =>{
       dispatch(setIsAside(false))
   },500)
    
    
  },[])
  
  
  return (
    <div className="min-h-screen w-full">
       
     <title>MBFRPFILES</title>
    <BypassAndroid />
   <Accounting />


    </div>
  )
}