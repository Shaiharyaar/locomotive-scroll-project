import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { About, Featured, Footer, Gallery, Header, Navbar } from '../components'
import CustomCursor from '../CustomCursor'
import useLocoScroll from '../hooks/useLocoScroll'
import '../styles/home.scss'
const Home = () => {
  const [preLoader, setPreLoader] = useState(true)
  const [timer, setTimer] = useState(3)
  const id = useRef(null)
  const clear = () => {
    window.clearInterval(id.current)
    setPreLoader(false)
  }

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1)
    }, 1000)
  }, [])

  useLocoScroll(!preLoader)

  useEffect(() => {
    if (timer === 0) {
      clear()
    }
  }, [timer])

  return (
    <>
      <CustomCursor />
      {preLoader ? (
        <div className={'loader-wrapper absolute'}>
          <h1>LocoMotive Scroll</h1>
          <h6>Loading Page...</h6>
        </div>
      ) : (
        <div id={'main-container-id'} className={'main-container'} data-scroll-container>
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  )
}

export default Home
