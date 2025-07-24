import MauritiusForexLicenseBanner from './mauritiusForexLicenseBanner'
import CompanyFormation from './companyFormation'
import Process from './process'
import RequirementsSection from './requirementsSection'
import Explicit from './explicit'
import TrustedPartners from './explicit/trustedPartners'
import Overview from './explicit/overview'
import React , {useEffect} from 'react'

export default function MauritiusForexLicense() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
      <MauritiusForexLicenseBanner/>
      <CompanyFormation/>
      <Process/>
      <RequirementsSection/>
      {/* <Explicit/> */}
      <TrustedPartners/>
      <Overview/>
    </div>
  )
}
