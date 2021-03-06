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
export default class ManagedServices extends React.Component {
  render () {
    const minHeight = {
      minHeight: `200px`
    , position: `relative`
    , top: `-50px`
    , padding: `70px 20px 20px`
    }

    const data = {
      blueHeader: `We own its health, performance and uptime`
    , blueParagraph:
      `Demands on I.T. service and availability in today's fast paced working world
      have forced organizations to evaluate different technologies and services
      to assist them in meeting high service standards. Jolera's Managed Service
      department has created a product portfolio list to provide various sized
      organizations with a series of offerings that can meet their I.T.
      requirements. Jolera's Managed Services portfolio is built around a
      proactive mentality designed to protect, service and ensure a high
      availability platform.`

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
          
        </div>
      </div>
    )
  }
}
