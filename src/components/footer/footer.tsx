
import React,{useState,useEffect} from 'react'

export default function Footer() {

const [date,setDate] = useState<number>()

useEffect(() => {
  
  const fullD = new Date();
  const n = fullD.getFullYear()
  
  setDate(n)
},[])

  return (
      <footer id="contact" className="text-center border-t border-white p-6 bg-gray-900 text-gray-400">
        <p>&copy; {date} MBBOY. All rights reserved.</p>
      </footer>
  )
}


