import React from 'react'
import styles from './webDevelopment.module.scss';
import WebDevelopmentBanner from './webDevelopmentBanner';
import DigitalSolutions from './digitalSolutions';
import SolutionsForDevice from './solutionsForDevice';
import MobileAndWeb from './mobileAndWeb';
import DigitalDevelopment from './digitalDevelopment';
export default function WebDevelopment() {
  return (
    <div>
      <WebDevelopmentBanner/>
      <DigitalSolutions/>
      <SolutionsForDevice/>
      <MobileAndWeb/>
      <DigitalDevelopment/>
    </div>
  )
}
