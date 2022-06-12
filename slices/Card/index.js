import { motion } from 'framer-motion'
import { PrismicRichText } from '@prismicio/react'
// import Image from 'next/image'

// animates the image
const zoom = {
  initial: { opacity: 1, scale: 1.1, transition: { easing:"ease", duration: 3 } },
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
  <section className='card' style={{ background: slice.primary.bgColor }}>
    <motion.img 
      width="100%" 
      variants={zoom} 
      initial="initial" 
      whileInView="animate" 
      exit="exit" 
      viewport={{ once: false, amount: 0.1 }} 
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
        <PrismicRichText style={{color: slice.primary.textColor}} field={slice.primary.buttonText} />
      </motion.button>
    </motion.div>
  </section>
)

export default Card