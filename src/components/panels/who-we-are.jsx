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
export default class WhoWeAre extends React.Component {
  render () {
    const minHeight = {
      minHeight: `280px`
    , position: `relative`
    , top: `-50px`
    , padding: `70px 20px 20px`
    }

    const data = {
      blueHeader: `Passion, Trust, Success, Loyalty`
    , blueParagraph:
      `Take passionate ownership of our clients' technology needs by taking the
      time to understand their respective businesses, challenges and opportunities.
      Provide unparalleled support for our clients 24 hours a day, 7 days a week,
      365 days a year. Position our clients for success by helping them maximize
      revenues, minimize costs and surpass their organizationl goals. Earn the
      loyalty of our clients by consistently delivering what we promise.`
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
          </div>
        </div>

        <div style={ [max, { padding: `20px` }] }>
          <p>Honesty and Integrity</p>

          <div>At Jolera we believe in:</div>

          <ul>
            <li>Teamwork, through diverse expertise, personal initiative and group collaboration</li>
            <li>Business Relationships, built on trust, integrity and honour</li>
            <li>Accountability, based on strong communication</li>
            <li>Transparency and acceptance of responsibility</li>
            <li>Citizenship - Helping our friends, neighbours and community</li>
          </ul>

          <div style={ textCenter }>
            <a style={ [button, babyBlue] }>JOIN OUR TEAM!</a>
          </div>
        </div>
      </div>
    )
  }
}
