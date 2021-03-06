import { motion } from 'framer-motion'


const fromRight = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 }
}

const LiveSign = (props) => {

  return (
      <motion.div
      layout
      variants={fromRight} 
      transition={{ delay: .4 }}
      initial="initial" 
      whileInView="animate" 
        // exit="initial"
      className='live'>
        <motion.div animate={{ opacity: [0,1,0], scale: [1,1.2,1], transition:{repeat: Infinity, duration: 1, times: [0, 0.3, 1]}}} className='live-dot' />
        {props.text}
      </motion.div>
  )
}

export default LiveSign