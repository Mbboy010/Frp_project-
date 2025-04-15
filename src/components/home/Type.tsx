import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface props{
text: any;
speed : any; 
isCheck: boolean;
}

export default function Typewriter  ({ isCheck,text, speed = 100 }:props) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    
    if(isCheck){
      
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
    
    }else{
      setIndex(0)
      setDisplayText("")
      }
    
  } );

  return (
    <motion.div
      className=" text-green-500 font-mono flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {displayText}
    </motion.div>
  );
};

