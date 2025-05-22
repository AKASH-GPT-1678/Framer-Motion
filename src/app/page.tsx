"use client";
import Image from "next/image";

//// Most basic and Important import almost needed to created all animations
import {motion} from "framer-motion"

import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Hello </h1>

       {/* This 100 Percent Rotation Property is called as Tween which just rotates When you add teh duration its the time it takes to complete duration longer the duration slower the time to 
       rotate One very cool property is repeat Infinity it literaaly makes your div or elemnet revolve infinitely */}
        <motion.div
            style={{
                width: 150,
                height: 150,
                borderRadius: 50,
                backgroundColor: "#fff",
                border: "2px solid black"
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity }}
        >

        
          </motion.div>
      
    </div>
  )
}

export default page

