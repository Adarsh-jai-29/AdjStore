import React from 'react'
import HeroSection from './HeroSection';

export default function About() {

  const myData = {
    name: 'AdjStore',
  }


  return (
    <HeroSection myData={myData} />
  )
}
