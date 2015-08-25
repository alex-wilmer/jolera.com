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
export default class CloudServices extends React.Component {
  render () {
    const minHeight = {
      minHeight: `200px`
    , position: `relative`
    , top: `-50px`
    , padding: `70px 20px 20px`
    }

    const data = {
      blueHeader: `It is a private cloud that makes a difference!`
    , blueParagraph:
      `Fixed pricing, easy configuration and on-demand make our Cloud
      Services stand out. We look at the cloud as an extension of your
      I.T. infrastructure needs. We build and design your cloud services to meet your needs in a transparent fashion.
      Working in tandem with our clients we have built a very comprehensive Cloud Services protfolio that can handle your demands and meet your ultimate needs!`
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
