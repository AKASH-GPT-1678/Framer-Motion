import Image from "next/image";
import TickMark from "../../public/tickmark.png";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Verified() {
    const [isVerifed, setIsVerified] = useState(false);

    return (
        <div>
            <div className="h-40 w-40 bg-green-600 flex flex-col items-center justify-center">
                <AnimatePresence>
                    {isVerifed && (
                        <motion.div
                            key="tick" // optional, helps with transition tracking
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 10 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}

                            whileHover={{scale : 1.10}}
                       
                            
                        >
                            <Image
                                src={TickMark}
                                alt="verification"
                                width={100}
                                height={100}
                                className="bg-white rounded-full hover:rounded-lg"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <button onClick={() => setIsVerified(!isVerifed)}>Reset</button>
        </div>
    );
}
