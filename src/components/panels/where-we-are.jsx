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
export default class WhereWeAre extends React.Component {
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
      blueHeader: `Easy to reach, easy to do business with`
    , blueParagraph:
      `Jolera is geographically positioned to provide exceptional service and
      sales support`

    , accordion: [
        {
          title: `Sales Support`
        , description: `Listening, designing and delivering`
        , content:
            <div>
              <p>
                Connect with our sales group for more information on our services.
              </p>

              <a style={ [button, babyBlue] }>SOLUTION TOGETHER!</a>
            </div>
        }
      , {
          title: `Field Support`
        , description: `The Ultimate Service Experience desk side`
        , content:
            <div>
              <div>Lorem ipsum</div>
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
      open: { maxHeight: `400px` }
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
