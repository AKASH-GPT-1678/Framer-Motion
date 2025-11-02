import React from 'react'
import { motion } from 'framer-motion'
export const BasicAnimation = () => {
  return (
    <div>
        <div className='h-[500px] w-[500px] bg-red-400 flex items-center justify-center'>
            <motion.div
            style={{
                   width: 150,
                    height: 150,
                    borderRadius: 30,
                    backgroundColor: "#fff",
                    position: "absolute"
            }}

            animate={{
                 left: 10,
                    top: 10,
                    scale: 0.5,
                    rotate: 45,
                    backgroundColor: "#ffd700"
            }}
            
            >

            </motion.div>

        </div>
    </div>
  )
}

 
 
 