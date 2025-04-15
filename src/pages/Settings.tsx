import BypassFrpSetting from '../components/setting/BypassFrpSetting';
import BypassTools from './BypassTools';
import React,{useEffect} from 'react'

import type { RootState } from '../components/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setIsAside } from "../components/redux/slicer/AsideCheck"
import { setOpacity } from "../components/redux/slicer/opacity"
import { setPosit } from "../components/redux/slicer/posit"

export default function Settings() {
  
  
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
    <div className="mt-20">
    <title>Settings and screen lock | MBFRPFILES</title>
           <BypassFrpSetting /> 



    </div>
  )
}