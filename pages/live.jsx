import React from 'react'
import Link from 'next/link'
import LiveSign from "./components/LiveSign";
import { motion } from "framer-motion";

const live = () => {
  return (
    <>
    <Link href="/"><a><LiveSign text="Now live" /></a></Link>
      <h1>This is live</h1>
      <motion.div initial={{y:"100%"}} animate={{y:0}} exit={{y:"100%"}} transition={{ ease: [1,-0.01,.33,.99], duration: 2, delay: .5 }}  className='anim1' />
    </>
  )
}

export default live