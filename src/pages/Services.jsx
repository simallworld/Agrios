import React from 'react'
import BreadcrumbHeader from '../components/UI/BreadcrumbHeader'
import Section1 from '../components/UI/Service/Section1'
import Section2 from '../components/UI/Service/Section2'
import Section3 from '../components/UI/Service/Section3'

const Services = () => {
  return (
    <div>
      <BreadcrumbHeader heading="Services" />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  )
}

export default Services