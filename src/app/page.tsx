"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
//// Most basic and Important import almost needed to created all animations
import { motion, scale, useAnimate, useCycle } from "framer-motion"

import React, { useState } from 'react'
import { Basic } from "next/font/google";
import { BasicAnimation } from "@/appcomponents/basicanimation";
import { LeftRight } from "./leftright";
import Verified from "@/appcomponents/verified";
import Variant from "@/appcomponents/variant";

const page = () => {
  const [animote, cycle] = useCycle(
    { scale: 1, rotate: 0, marginLeft: 0 },
    { scale: 1.25, rotate: 90, marginLeft: 70, height: 400, width: 400 }
  )

  function sequence() {
    animatee([
      [scope.current, { marginLeft: 20 }],
      [scope.current, { marginLeft: 70 }],
      [scope.current, { rotate: 360 }],
      [scope.current, { scale: 2 }]
    ]);
  }

  const [scope, animatee] = useAnimate()
  const [animate, cyclee] = useCycle(
    { scale: 1, rotate: 0 },
    { scale: 2.25, rotate: 90, marginLeft: 70 }
  )

  const [degrees, setDegreed] = useState(0)

  function rotateMore() {
    if (degrees != 360) {
      setDegreed(degrees + 45)
    } else {
      setDegreed(0)
    }

  }
  return (
    <div>
    <LeftRight/>
    <Verified/>
    <Variant/>

   


    </div>
  )
}

export default page

