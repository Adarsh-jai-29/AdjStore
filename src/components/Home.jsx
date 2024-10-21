import React from 'react'
import HeroSection from './HeroSection'
import Service from './Service'
import Trusted from './Trusted'
import FeatureProduct from './FeatureProduct'

function Home() {

  const myData = {
    name: 'AdjCart',
  }


  return (
  <>
  
    <HeroSection myData={myData} />
    <FeatureProduct  />
    <Service />
    <Trusted />

    </>
  )
}

export default Home