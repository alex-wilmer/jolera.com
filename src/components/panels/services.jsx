// Dependencies

import React from 'react'
import Radium from 'radium'
import assign from 'object-assign'

// Style

import { BABY_BLUE } from '../../style/style-consts.jsx'
import {
  blueBackground
, max
, textCenter
, smallHeader
, button
, babyBlue
} from '../../style/style.jsx'

@Radium
export default class Services extends React.Component {
  constructor (props) {
    super(props)

    this.state = { activeItemIndexes: [] }
    this.selectItem = this.selectItem.bind(this)
  }

  render () {
    const minHeight = {
      minHeight: `280px`
    , position: `relative`
    , top: `-50px`
    , padding: `70px 20px 20px`
    }

    const data = {
      blueHeader: `To buy or get service anytime - we are always here 365x24x7!`
    , blueParagraph:
        `It is comforting for our customers and partners to know that we are always here.
        Open 24x7 you can get services and help for almost anything I.T. that Jolera supports!`

    , accordion: [
        {
          title: `24/7 Service Desk`
        , description: `Contact the ultimate service desk!`
        , content:
            <div>

            </div>
        }
      , {
          title: `Procurement`
        , description:
            `Strategic sourcing to help any business save operating and capital
            costs and manage inventory`
        , content:
            <div>
              <p>
                Contact us today to understand our cost and strategy that helps
                your business redue costs and the burden of multiple quote shopping.
                Your bottom line is our top line.
              </p>
            </div>
        }
      ]
    }

    const accordionContentBaseStyle = {
      marginTop: `20px`
    , overflow: `hidden`
    , transition: `max-height 0.3s ease-in-out`
    }

    const accordionHeight = {
      open: { maxHeight: `250px` }
    , closed: { maxHeight: `0px` }
    }

    const accordionItems = data.accordion.map((m, i) => {
      return (
        <div key={ i }>
          { i ? <hr /> : `` }

          <a className='clearfix' onClick={ this.selectItem.bind(this, i) }>
            <div style={ smallHeader }>{ m.title }</div>
            <div style={ { float: `left` } }>{ m.description }</div>
            <i style={ [
              { float: `right`, transition: `transform 0.3s ease` }
            , this.state.activeItemIndexes.indexOf(i) > -1
              ? { transform: `rotate(180deg)` }
              : { transform: `rotate(0deg)` }
            ] } className='fa fa-chevron-down' />
          </a>

          <div style={ [
            accordionContentBaseStyle
          , this.state.activeItemIndexes.indexOf(i) > -1
              ? accordionHeight.open : accordionHeight.closed
          ] }>{ m.content }</div>
        </div>
      )
    })

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

        <div style={ [max, { padding: `20px`}] }>
          { accordionItems }
        </div>
      </div>
    )
  }

  selectItem (i) {
    const arr = this.state.activeItemIndexes.slice()
    const index = arr.indexOf(i)
    if (index > -1) {
      this.setState({ activeItemIndexes:
        [ ...arr.slice(0, index), ...arr.slice(index + 1, arr.length)] })
    }
    else {
      arr.push(i)
      this.setState({ activeItemIndexes: arr })
    }
  }
}
