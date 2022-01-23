import React from 'react'
import './style.scss'

const Navbar = () => {
  return (
    <section className='header-container' data-scroll-section>
      <ul className='header-menu'>
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <h1 id='header-text'>Art Objects</h1>
    </section>
  )
}

export default Navbar
