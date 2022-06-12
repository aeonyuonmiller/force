import React from 'react'
import { PrismicRichText } from '@prismicio/react'
// import Image from 'next/image'

const Card = ({ slice }) => (
  <section className='card' style={{ background: slice.primary.bgColor }}>
    <img width="100%" src={slice.primary.backgroundImage.url} alt={slice.primary.backgroundImage.alt} />
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