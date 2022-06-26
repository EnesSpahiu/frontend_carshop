import React from 'react'
import CarCard from '../organisms/CarCard'

export default function Home() {
  return (
    <CarCard 
    description='Test' 
    name='Test Test' 
    picture_url='https://images.ichkoche.at/data/image/variations/250x167/1/apfel-img-9270.jpg'
    price={120}/>
  )
}
