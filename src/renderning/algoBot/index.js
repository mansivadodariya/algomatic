import React , {useEffect} from 'react'
import AlgoBotBanner from './algoBotBanner'
import WhatisAlgo from './whatisAlgo'
import AdvantagesofAlgo from './advantagesofAlgo'
import Algoprocess from './algoprocess'
import PowerfullAlgo from './powerfullAlgo'
import HireDedicatedDeveloper from './hireDedicatedDeveloper'

export default function AlgoBot() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
      <AlgoBotBanner/>
      <WhatisAlgo/>
      <AdvantagesofAlgo/>
      <Algoprocess/>
      <HireDedicatedDeveloper/>
      <PowerfullAlgo/>
    </div>
  )
}
