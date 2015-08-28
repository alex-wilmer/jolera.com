// Dependencies

import React from 'react'
import Radium from 'radium'
import assign from 'object-assign'

// Style

import { BABY_BLUE } from '../../style/style-consts.jsx'
import {
  accordionContentBaseStyle
, blueBackground
, max
, textCenter
, smallHeader
, button
, babyBlue
} from '../../style/style.jsx'

@Radium
export default class WhatWeDo extends React.Component {
  constructor (props) {
    super(props)

    this.state = { activeItemIndexes: [] }
    this.selectItem = this.selectItem.bind(this)
  }

  render () {
    const minHeight = {
      minHeight: `200px`
    , position: `relative`
    , top: `-50px`
    , padding: `70px 20px 20px`
    }

    const data = {
      blueHeader: `Providing the ultimate user experience`
    , blueParagraph:
      `By coupling the different services we offer we can create and ultimate turnkey
      customer experience that is tuned to making businesses more efficient, productive
      and focused on their core compentencies and not internal I.T. challenges.`

    , accordion: [
        {
          title: `Direct Users`
        , description: `A Turnkey I.T. customer experience`
        , content:
            <div>
              <p>
                We service customers of many different sizes, types and market segments
                by complementing, upgrading or replacing existing platforms - adding
                our consulting & managed services to achieve organizational benefits
                and objectives.
              </p>

              <a style={ [button, babyBlue] }>EXPERIENCE ULTIMATE!</a>
            </div>
        }
      , {
          title: `Resellers`
        , description: `Make your portfolio ultimate`
        , content:
            <div>
              <div>Lorem ipsum</div>
            </div>
        }
      ]
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

        <div style={ [max, { padding: `20px` }] }>
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
