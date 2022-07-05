import { motion } from "framer-motion";
import { useEffect } from "react";
import { PrismicRichText } from "@prismicio/react";
// import Image from 'next/image'
import { PrismicNextImage } from "@prismicio/next";

// animates card
const card = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

// animates the image
const zoom = {
  initial: { opacity: 1, scale: 1.1 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { easing: "ease", duration: 2 },
  },
  exit: { opacity: 0, scale: 1.1 },
};

// animtes the content
const container = {
  initial: { y: 50 },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

// animtes the content items
const item = {
  initial: { y: 30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, easing: "spring" },
  },
};

const Card = ({ slice }) => (
  <motion.section
    variants={card}
    initial="initial"
    whileInView="animate"
    className="card"
    style={{ background: slice.primary.bgColor }}
  >
    <motion.img
      width="100%"
      variants={zoom}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ once: false, margin: "200px", amount: 0.2 }}
      src={slice.primary.backgroundImage.url}
      alt={slice.primary.backgroundImage.alt}
    />
    <motion.div
      className="content"
      variants={container}
      initial="initial"
      whileInView="animate"
    >
      <motion.div variants={item}>
        <PrismicRichText field={slice.primary.title} />
      </motion.div>
      <motion.div variants={item}>
        <PrismicRichText field={slice.primary.body} />
      </motion.div>
      <motion.button
        className="snipcart-add-item card-btn"
        data-item-url={slice.primary.title}
        data-item-id={slice.primary.title}
        data-item-price={slice.primary.price}
        data-item-description={slice.primary.body}
        data-item-image={slice.primary.backgroundImage.url}
        data-item-name={slice.primary.title}
        whileHover={{ scale: 0.97, cursor: "pointer" }}
        variants={item}
        style={{
          background: slice.primary.buttonColor,
          color: slice.primary.textColor,
        }}
      >
        <PrismicRichText field={slice.primary.buttonText} />
      </motion.button>
    </motion.div>
  </motion.section>
);

export default Card;
