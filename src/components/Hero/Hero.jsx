import React, { useState } from 'react'
import './Hero.css'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap'
import slide_1 from '../Assets/slide_1.jpg'
import slide_2 from '../Assets/slide_2.png'
import slide_3 from '../Assets/slide_3.jpg'


const items = [
  {
    id: 1,
    image: slide_2,
    altText: 'TRUSTED BY MILLIONS',
    caption: 'A Promise to Make Exceptinal Silk Sarees'
  },
  {
    id: 2,
    image: slide_1,
    altText: '',
    caption: ''
  },
  {
    id: 3,
    image: slide_3,
    altText: '',
    caption: ''
  },
  // {
  //   id: 4,
  //   image: slide_4,
  //   altText: '',
  //   caption: ''
  // }
  // ... Add more slides if needed
]

export const Hero = props => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map(item => {
    return (
      <CarouselItem className='slide'
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <img src={item.image} alt={item.altText} />
        <CarouselCaption className='caption'
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    )
  })

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous} interval={100000}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction='prev'
        directionText='Previous'
        onClickHandler={previous}
      />
      <CarouselControl
        direction='next'
        directionText='Next'
        onClickHandler={next}
      />
    </Carousel>
  )
}
