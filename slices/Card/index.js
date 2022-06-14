import { motion } from 'framer-motion'
import { PrismicRichText } from '@prismicio/react'
// import Image from 'next/image'

// animates card
const card = {
  initial: { y:100, opacity:0 },
  animate: { y: 0, opacity:1 }
}

// animates the image
const zoom = {
  initial: { opacity: 1, scale: 1.1 },
  animate: { opacity: 1, scale: 1, transition: { easing:"ease", duration: 2 }},
  exit: { opacity: 0, scale: 1.1 }
}

// animtes the content items
const container = {
  initial: { rotate: 9 },
  animate: {
      rotate: 0,
      transition: {
          staggerChildren: 0.1,
          delayChildren: 0.3,
      },
  },
}

const Card = ({ slice }) => (
  <motion.section variants={card} initial="initial" whileInView="animate" className='card' style={{ background: slice.primary.bgColor }}>
    <motion.img 
      width="100%" 
      variants={zoom} 
      initial="initial" 
      whileInView="animate" 
      exit="exit" 
      viewport={{ once: false, amount: 0.2 }} 
      src={slice.primary.backgroundImage.url} 
      alt={slice.primary.backgroundImage.alt} 
    />
    <motion.div 
      className='content' 
      variants={container}
      initial="initial"
      whileInView="animate"
    >
      <motion.span><PrismicRichText field={slice.primary.title} /></motion.span>
      <motion.span><PrismicRichText field={slice.primary.body} /></motion.span>
      <motion.button style={{ background: slice.primary.buttonColor }}>
        <span style={{color: slice.primary.textColor}}><PrismicRichText field={slice.primary.buttonText} /></span>
      </motion.button>
    </motion.div>
  </motion.section>
)

export default Card