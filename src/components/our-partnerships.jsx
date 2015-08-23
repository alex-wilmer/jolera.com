import React from 'react'
import { SPACING } from '../style/style-consts.jsx'
import { smallHeader } from '../style/style.jsx'
import Carousel from './carousel.jsx'

export default class OurPartnerships {
  render () {
    const style = {
      wrapper: {
        textAlign: `center`
      , margin: `${ SPACING + 20 }px 0 ${ SPACING }`
      }
    }

    return (
      <div style={ style.wrapper }>
        <div style={ smallHeader }>Our Partnerships</div>
        <Carousel />
      </div>
    )
  }
}
