import NotFound from './pages/NotFound';
import System from './pages/System';
import Settings from './pages/Settings';
import BypassTools from './pages/BypassTools';
import Aside from './components/aside/Aside';
import Footer from './components/footer/footer';
import Navigate from './components/navigate/Navigate';
import About from './pages/About';
import Home from './pages/home/Home';
import React,{useState, useEffect} from 'react'
import {Routes,Route} from "react-router-dom"

function App() {
  
  
  const [data,setData] = useState<string | any>("light")
  
  
  
  
  
  
  return (

    <div className="min-h-screen min-w-full relative flex justify-center rel items-center bg-gray-900 text-white">



    <div className="w-full min-h-screen">
    <Navigate />
    
   
   <div className="mt-20  w-full min-h-screen">
   
   
   
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<NotFound  />} />
    <Route path="/bypass_tools" element={<BypassTools />} />
    <Route path="/system_apps" element={<System  />} />
    <Route path="/Settings_and_lock_screen" element={<Settings  />
} />
  </Routes>
  
  
   </div>
   

   <Footer />
    </div>


    </div>

  );
}

export default App;
