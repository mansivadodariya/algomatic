import Herobanner from './herobanner'
import Aboutus from './aboutus'
import Service from './service'
import Calculator from './calculator'
import React , {useEffect} from 'react'
export default function Homepage() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
      <Herobanner/>
      <Aboutus/>
      <Service/>
      <Calculator/>
    </div>
  )
}
