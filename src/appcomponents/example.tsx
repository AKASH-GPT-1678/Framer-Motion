import { motion } from "framer-motion";
export function Example() {
    return (
        <div>
            <motion.div
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 30,
                    backgroundColor: "#fff",
                    originY: 0
                }}
                animate={{ rotateX: 360 }}
            />
        </div>
    );
} 

