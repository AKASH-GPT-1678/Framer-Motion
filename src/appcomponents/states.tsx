import React from 'react';
import { useAnimate } from 'framer-motion';

const SequeneAnim = () => {
    const [scope, animate] = useAnimate();

    function design() {
        animate([
            [scope.current, { rotate: 90 }],
            [scope.current, { scale: 1.25 }]


        ])
    }
    return (
        <div>
            <div
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 30,
                    backgroundColor: "#fff",
                    cursor: "pointer",
                    border: "2px solid"
                }}
                ref={scope}
                onClick={design}
            />

        </div>
    )
}

export default SequeneAnim
