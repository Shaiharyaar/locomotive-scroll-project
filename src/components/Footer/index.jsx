import React from 'react'
import SectionHeader from '../../common/SectionHeader'
import './style.scss'

const Footer = () => {
  return (
    <section className={'footer'} data-scroll-section>
      <SectionHeader title={'Made in'} />

      <h1 id={'location-text'} className={'location'}>
        Rio de Janeiro
      </h1>
    </section>
  )
}

export default Footer
