import { motion } from 'framer-motion'
import { PrismicRichText } from '@prismicio/react'
// import Image from 'next/image'

const animation = {
  initial: { opacity: 1, scale: 1.1 },
  animate: { opacity: 1, scale: 1, transition: { easing:"ease", duration: 2 }},
  exit: { opacity: 0, scale: 1.1 }
}

const Card = ({ slice }) => (
  <section className='card' style={{ background: slice.primary.bgColor }}>
    <motion.img 
      width="100%" 
      variants={animation} 
      initial="initial" 
      whileInView="animate" 
      exit="exit" 
      viewport={{ once: true }} 
      src={slice.primary.backgroundImage.url} 
      alt={slice.primary.backgroundImage.alt} 
    />
    <div className='content'>
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.body} />
      <button style={{ background: slice.primary.buttonColor }}>
        <PrismicRichText style={{color: slice.primary.textColor}} field={slice.primary.buttonText} />
      </button>
    </div>
  </section>
)

export default Card