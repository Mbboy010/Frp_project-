import { useState } from "react";
import { FaAndroid, FaDownload, FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-router-dom"
import Typewriter from "./Type"

export default function BypassAndroid() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCheck,setIsCheck] = useState<boolean>(false)
  const [text,setText] = useState<string>("It appears you're seeking tools related to bypassing certain Android security features, such as Factory Reset Protection (FRP). FRP is a security measure implemented by Google to prevent unauthorized access to a device after a factory reset. While there are tools available that claim to bypass FRP locks, it's important to note that using such tools may violate terms of service and could pose security risks. If youre attempting to regain access to your own device and have forgotten your credentials, its recommended to contact the device manufacturers customer support or visit an authorized service center for assistance.For developers interested in markdown parsing, there's an Android library project called bypass-android available on GitHub. This library provides pre-built JNI libraries for parsing markdown in Android applications. You can find more information and the latest version on its GitHub repository.")
  
  
  const handle = () =>{

    
    if(isCheck){
       setIsCheck(false)
    }else{
      setIsCheck(true)
    }
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}

      
      {/* Hero Section */}
      <div className="w-screen flex justify-center items-center">
      <header className="text-center w-[95%] rounded-md py-20 bg-gray-800">
        <h1 className="text-4xl font-bold">Bypass Any Android Lock</h1>
        <p className="mt-4 text-gray-400">Easy and secure Android unlocking tools</p>
        <Link to="/bypass_tools">
          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl">
            <FaDownload className="inline mr-2" /> Download Now
          </button>
        </Link>
      </header>
       </div>

      
      {/* Features Section */}
      <section id="features" className="p-10 text-center">
      
        <h2 className="text-3xl font-semibold">Features</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-xl text-yellow-400 font-bold">FRP Bypass</h3>
            <p className="text-gray-400">Bypass Google FRP lock easily.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-xl text-blue-400 font-bold">Pattern Unlock</h3>
            <p className="text-gray-400">Remove pattern locks quickly.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-xl text-red-400 font-bold">Safe & Secure</h3>
            <p className="text-gray-400">No data loss during unlocking.</p>
          </div>
        </div>
      </section>
      
      {/* Download Section */}
     <div className="w-screen flex justify-center items-center">
      <section id="download" className="text-center w-[95%] rounded-md p-10 bg-gray-800">
        <h2 className="text-3xl font-semibold">Download Now</h2>
        <p className="mt-4 text-gray-400">Get the latest version of Bypass Android</p>
        <button onClick={handle} className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl">
          <FaDownload className="inline mr-2" /> Download APK
        </button>
        <div onClick={handle} style={{display: isCheck ? "block" : "none" , zIndex: "100",}} className="fixed left-0 top-0 w-screen min-h-screen ">
        <div className="backdrop-blur-sm bg-[#0000005c] w-full flex flex-col items-start  min-h-screen">
        <h1 className="mt-3 font-black text-white   font-mono text-2xl">Get the latest version of Bypass Android</h1>
        
        
    <div className="mx-3 mt-4 ">
      <Typewriter isCheck={isCheck} text={text} speed={80} />
    </div>
    
    
        </div>
        </div>
      </section>
      </div>
      
      {/* Footer */}

    </div>
  );
}
