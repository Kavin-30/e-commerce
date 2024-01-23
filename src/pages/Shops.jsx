import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { Popular } from '../components/popular/Popular'
import { Offer } from '../components/Offers/Offer'
import { Newcollections } from '../components/NewCollections/Newcollections'
import { Newletter } from '../components/Newsletter/Newletter'

export const Shops = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offer/>
        <Newcollections/>
        <Newletter />
    </div>
  )
}
