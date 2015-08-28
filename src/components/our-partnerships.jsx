/*
    This component lives on the home page.
 */

// Dependencies

import React from 'react'

// Style

import { SPACING } from '../style/style-consts.jsx'
import { smallHeader } from '../style/style.jsx'

// Components

import Carousel from './carousel.jsx'

export default class OurPartnerships extends React.Component {
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
        <Carousel wide={ this.props.wide } data={ this.props.partners }/>
      </div>
    )
  }
}
