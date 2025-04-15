import React from 'react'
import {Link} from "react-router-dom"
import { IoMdDownload } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineSystemUpdate } from "react-icons/md";

export default function Content() {
  return (
    <div>
    <div>
    <h1 className="text-[1rem] mb-2 text-gray-400  font-bold  ml-1">Bypass tools</h1>
      <div className="flex flex-col ml-2">
        <Link className="text-[0.9rem] text-green-500 items-center  font-semibold flex p-1 ml-1" to="/bypass_tools"><IoMdDownload className="mr-1 text-[1rem]"/>  Download tools</Link>
        
        <Link className="text-[0.9rem] text-green-500 items-center  font-semibold flex p-1 ml-1" to="/system_apps"><MdOutlineSystemUpdate className="mr-1 text-[1rem]"/>  System apps open</Link>
        
        <Link className="text-[0.9rem] text-green-500 items-center  font-semibold flex p-1 ml-1" to="/Settings_and_lock_screen"><IoMdSettings className="mr-1 text-[1rem]"/> Settings and lock screen</Link>
      </div>
    </div>
    </div>
  )
}