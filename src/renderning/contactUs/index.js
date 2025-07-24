import ContactUsBanner from './contactUsBanner'
import Helpsection from './helpsection'
import React , {useEffect} from 'react'
export default function ContactUs() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
      <ContactUsBanner/>
      <Helpsection/>
    </div>
  )
}
