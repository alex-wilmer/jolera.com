import React from 'react'
import Radium from 'radium'
import assign from 'object-assign'
import {
  blueBackground
, max
, textCenter
, smallHeader
, button
, babyBlue
} from '../../style/style.jsx'

import { BABY_BLUE } from '../../style/style-consts.jsx'

@Radium
export default class Sales extends React.Component {
  render () {
    const minHeight = {
      minHeight: `280px`
    , position: `relative`
    , top: `-50px`
    , padding: `70px 20px 20px`
    }

    const data = {
      blueHeader: `Experience Ultimate and contact us today!`
    , blueParagraph:
        `We promise to listen first and then work with you to come up with
        your best solution.  Our team is always happy to engage - reach us
        by email or phone today!`
    , blueParagraph2: `Contact us today!`
    }

    const babyBlueHeader = assign({}, smallHeader)
    babyBlueHeader.color = BABY_BLUE

    return (
      <div>
        <div style={ [blueBackground, minHeight] }>
          <div style={ [max, textCenter] }>
            <div style={ babyBlueHeader}>
              { data.blueHeader }
            </div>

            <p style={ { color: `white` } }>{ data.blueParagraph }</p>
            <p style={ { color: `white` } }>{ data.blueParagraph2 }</p>
          </div>
        </div>
      </div>
    )
  }
}
