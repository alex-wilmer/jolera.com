import React from 'react'
import Radium from 'radium'
import assign from 'object-assign'
import { SPACING, BLUE } from '../style/style-consts.jsx'
import { textCenter, smallHeader, button, babyBlue } from '../style/style.jsx'

@Radium
export default class OurServices extends React.Component {
  render () {
    const wrapper = assign({}, textCenter, {
      margin: `${ SPACING + 30 }px 0 ${ SPACING }px`
    })

    let tileBaseStyle = {
      width: this.props.wide ? `calc(33.33% - ${ SPACING - 6 }px) ` : `300px`
    , height: this.props.wide ? `calc(33.33% - ${ SPACING - 6 }px) ` : `300px`
    , backgroundColor: `white`
    , padding: `20px`
    , color: `${ BLUE }`
    }

    tileBaseStyle = this.props.wide
      ? assign({}, tileBaseStyle, { float: `left` })
      : assign({}, tileBaseStyle, { display: `block`, margin: `0 auto` })

    const data = [
      {
        title: `Managed Services`
      , description:
          `Providing complete peace of mind, care and support for all your
          infrastructure elements`
      , slogan: `Experience Tranquility`
      , icon: `img/icons/forkknife-service.png`
      }
    , {
        title: `Cloud Services`
      , description:
          `Leveraging our dedicated and private infrastructure services for easy
          integration, scaling and extension of your I.T. needs`
      , slogan: `Be Cloud Ready!`
      , icon: `img/icons/cloud-service.png`
      }
    , {
        title: `Professional Services`
      , description:
          `Turnkey consulting and implementation teams that own customer visions
          and needs`
      , slogan: `Experience Delivery`
      , icon: `img/icons/headset-service.png`
      }
    ]

    const tiles = data.map((m, i) => {
      const tileStyleWide = i && this.props.wide
        ? assign({}, tileBaseStyle, {
          marginLeft: `${ SPACING }px`
        })
        : tileBaseStyle

      const tileStyle = i && !this.props.wide
        ? assign({}, tileBaseStyle, {
          marginTop: `${ SPACING }px`
        })
        : tileBaseStyle

      return (
        <a style={ this.props.wide ? tileStyleWide : tileStyle }>
          <img src={ m.icon } />
          <div style={ smallHeader }>{ m.title }</div>
          <div style={ { fontSize: `0.85em` } }>{ m.description }</div>
          <div style={ smallHeader }>{ m.slogan }</div>
        </a>
      )
    })

    return (
      <div style={ wrapper }>
        <div style={ smallHeader }>Our Services</div>
        { tiles }
        <div><a style={ [button, babyBlue] }>VIEW ALL SERVICES</a></div>
      </div>
    )
  }
}
