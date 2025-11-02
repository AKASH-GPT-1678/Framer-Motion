"use client";
import React from 'react'
import { motion, useCycle , useAnimate} from "framer-motion";
import Image from 'next/image';
import Subhash from "../../../public/subhash.jpg"

const page = () => {
     const [animote , cycle] = useCycle(
    {scale : 1 , rotate : 0, marginLeft : 0},
    {scale : 1.25 , marginLeft : 70 , height : 400 , width : 400}
  );
  const [scope , animate] = useAnimate();

   function sequence() {
        animate([
            [scope.current, { rotate: -90 }],
            [scope.current, { scale: 1.5 }],
            [scope.current, { rotate: 0 }],
            [scope.current, { scale: 1 }]
        ]);
    }
    return (
        <div>

            <motion.div
                className="border-2 border-black w-32 h-32 rounded-2xl"
                animate={animote}
                onTap={() => cycle()}
                


            >
                <Image src={Subhash} alt='Images' width={400} height={400}/>


            </motion.div>

            <motion.div
              style={{
                width: 150,
                height: 150,
                borderRadius: 30,
                backgroundColor: "#fff",
                cursor: "pointer",
                border : '2px solid'
            
            }}
            
            ref={scope}
            onTap={sequence}
            >

            </motion.div>


        </div>
    )
}

export default page
