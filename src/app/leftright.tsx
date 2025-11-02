import { motion } from 'framer-motion'
import React from 'react'
export function LeftRight() {
    const [show , setShow] = React.useState(true);
    
    return (

        <>
            {/* <motion.div
                style={{ width: "100%", height: "100px", border: "2px solid red" }}


            >
                <h1>Left to Right</h1>

                <motion.h1
                    initial={{ x:  2000 }}
                    animate={{ x: 100 }}
                    transition={{
                        type: "inertia",
                        repeat: Infinity,
                        
                        repeatType: "mirror",
                        repeatDelay: 0.1,
                        duration: 10
                    }}
                    onAnimationComplete={() }
                    
                    
                



                >
                    Lamborgini 

                </motion.h1>

            </motion.div> */}



        </>
    )
}