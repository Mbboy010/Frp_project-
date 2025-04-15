
import React,{useEffect} from 'react'

import type { RootState } from '../components/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setIsAside } from "../components/redux/slicer/AsideCheck"
import { setOpacity } from "../components/redux/slicer/opacity"
import { setPosit } from "../components/redux/slicer/posit"

export default function NotFound() {
  
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
    
    <div className="flex mt-20 flex-col items-center min-h-screen bg-gray-900  text-gray-400">
      <title>Not found 404 | MBFRPFILES</title>
      <h1 className="text-6xl font-bold">404</h1>
      <p className=" mt-4">Oops! The page you're looking for doesn't exist.</p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Go Home
      </a>
    </div>

  )
}