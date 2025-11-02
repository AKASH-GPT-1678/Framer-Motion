import { motion } from "framer-motion";

export default function Variant() {

    const variant = {
        shuru: { scale: 1.10 },
        unglipe: { borderRadius: "75px" },
        khatam: { backgroundColor: "#ffd700" },
    }

    return (

        <>
            <motion.div
                variants={variant}
                animate="shuru"
                whileHover="unglipe"
                whileTap="khatam"

                className="h-40 w-40"




            >


            </motion.div>



        </>
    )
}