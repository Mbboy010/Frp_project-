import React,{useState, useEffect} from 'react'
import "./Style.css"
import { doc,getDocs,collection } from "firebase/firestore";
import {auth,db,storage} from "../../server/firebaseApi"


export default function SystemTools() {
  const [istrue,setIstrue] = useState<boolean>(false)
  const [data,setData] = useState<any>([])
  
  useEffect(() =>{
    
    
    
    
    
    async function dat(){
      
      
        
      let docSnap = await getDocs(collection(db, "System"))
            .then(async (querySnapshot)=>{              
                const newData = await querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
               await setData(newData);
               
                     if (data.length >= 1) {
                       await setIstrue(true)
                         }
      
               
            })
      
   }
    
    
    dat()
    
    
    
    
    
  })
  
  
  return (
   <div className="flex flex-col items-center p-6 bg-gray-900  min-h-screen">
      <h1 className="text-3xl font-bold mb-6">System apps</h1>
       <div className="w-screen  flex flex-col gap-2 min-h-screen">
       
      
  {
    istrue ? 
    data.map((element : any, index : any) =>  <a className="px-4 py-1" href={element.link} key={index}>
      
        <div className="flex items-center hover:bg-gray-700 p-2 bg-gray-800 shadow rounded-lg">
          <div className=" text-white p-3  mr-4">
            <img src={element.img} className="w-11 w-11" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-green-500 ">{element.title}</h2>
            <p className="text-gray-500">{element.pack}</p>
          </div>
        </div>
          </a>

    
    ) : 
    <div className="w-screen  flex flex-col gap-2 min-h-screen">
    
    <a className="px-4 py-1">
      
        <div className="flex items-center  p-2 bg-gray-800 shadow rounded-lg">
          <div className=" text-white p-3  mr-4">
            <div  className="w-11 h-11 cousss" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-lg font-semibold cousss h-4 w-[50%] text-blue-600"></h2>
            <p className="text-gray-500 cousss h-2 w-[70%] "></p>
          </div>
        </div>
          </a>
    
    <a className="px-4 py-1">
      
        <div className="flex items-center  p-2 bg-gray-800 shadow rounded-lg">
          <div className=" text-white p-3  mr-4">
            <div  className="w-11 h-11 cousss" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-lg font-semibold cousssone h-4 w-[50%] text-blue-600"></h2>
            <p className="text-gray-500 cousss h-2 w-[70%] "></p>
          </div>
        </div>
          </a>
    
    <a className="px-4 py-1">
      
        <div className="flex items-center  p-2 bg-gray-800 shadow rounded-lg">
          <div className=" text-white p-3  mr-4">
            <div  className="w-11 h-11 cousss" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-lg font-semibold coussstwo h-4 w-[50%] text-blue-600"></h2>
            <p className="text-gray-500 cousss h-2 w-[70%] "></p>
          </div>
        </div>
          </a>
    
    </div>
  }
        
      
      </div>
    
    </div>
  )
}

const dat = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/new-todo-66e30.appspot.com/o/1ter%2Fic_launcher.png?alt=media&token=5e9b71bf-e01b-4ada-8b99-3f2a35caf4e8",
    title: "Quckshortcutmaker",
    link: "intent://com.google.android.youtube/#Intent;scheme=android-app;end",
    pack: "google.youtube.com"
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/new-todo-66e30.appspot.com/o/1ter%2Fic_launcher.png?alt=media&token=5e9b71bf-e01b-4ada-8b99-3f2a35caf4e8",
    title: "Quckshortcutmaker",
    link: "intent://com.imaginstudio.imagetools.pixellab/#Intent;scheme=android-app;end",
    pack: "google.youtube.com"
  },
  ]