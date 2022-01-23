import { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/src/locomotive-scroll.scss'

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return

    let locoScroll = null

    const scrollElement = document.querySelector('#main-container-id')

    locoScroll = new LocomotiveScroll({
      el: scrollElement,
      smooth: true,
      multiplier: 1,
      class: 'is-reveal',
    })
  }, [start])
}
