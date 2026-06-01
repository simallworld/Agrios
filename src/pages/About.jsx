import React from 'react'
import BreadcrumbHeader from '../components/UI/BreadcrumbHeader'
import Section1 from '../components/UI/About/Section1'
import Section2 from '../components/UI/About/Section2'
import Section3 from '../components/UI/About/Section3'
import Section4 from '../components/UI/About/Section4'

const About = () => {
  return (
    <div className=''>
      <BreadcrumbHeader heading="About" />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  )
}

export default About