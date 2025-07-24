import CalculatorBanner from './calculatorBanner'
import CalculatorDetails from './calculatorDetails'
import React , {useEffect} from 'react'
export default function Calculator() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
      <CalculatorBanner/>
      <CalculatorDetails/>
    </div>
  )
}
