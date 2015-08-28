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

// SharePoint Services

import { getItems } from '../../sharepoint-services/list.jsx'

@Radium
export default class ProfessionalServices extends React.Component {
  constructor (props) {
    super(props)

    this.state = { products: [], activeItemIndexes: [] }
    this.selectItem = this.selectItem.bind(this)

    getItems(`Professional Services Products`, { site: _spPageContextInfo.webTitle })
      .then(data => this.setState({ products: data }))
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

  render () {
    const minHeight = {
      minHeight: `200px`
    , position: `relative`
    , top: `-50px`
    , padding: `70px 20px 20px`
    }

    const data = {
      blueHeader: `Owning it end to end!`
    , blueParagraph:
      `Performance driven, our team will dilligently ensure that your projects
      are complete on time, on budget and to your total satisfaction.`
    }

    const accordionHeight = {
      open: { maxHeight: `1500px` }
    , closed: { maxHeight: `0px` }
    }

    const accordionItems = this.state.products.map((m, i) => {
      return (
        <div key={ i }>
          { i ? <hr /> : `` }

          <a className='clearfix' onClick={ this.selectItem.bind(this, i) }>
            <img src={ m.Logo.Url } style={{ float: `left`, paddingRight: `50px` }} />
            <div style={ smallHeader }>{ m.Title }</div>
            <div style={ { float: `left` } }>{ m.Slogan }</div>
            <i key={ i + 10000 } style={ [
              { float: `right`, transition: `transform 0.3s ease` }
            , this.state.activeItemIndexes.indexOf(i) > -1
              ? { transform: `rotate(180deg)` }
              : { transform: `rotate(0deg)` }
            ] } className='fa fa-chevron-down' />
          </a>

          <div key={ i + 5000 } style={ [
            accordionContentBaseStyle
          , this.state.activeItemIndexes.indexOf(i) > -1
              ? accordionHeight.open : accordionHeight.closed
          ] }>
            <div dangerouslySetInnerHTML={{ __html: m.Description }}></div>

            <a href={ m.CTA_Button.Url } style={ [button, babyBlue] }>
              { m.CTA_Button.Description }
            </a>
          </div>
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
}
