import React from 'react'
import assign from 'object-assign'
import { SPACING, BABY_BLUE } from '../style/style-consts.jsx'
import { textCenter, smallHeader, button } from '../style/style.jsx'

class OurServices {
  render () {
    let tileBaseStyle = {
      width: this.props.wide ? `calc(33.33% - ${ SPACING - 6 }px) ` : `300px`
    , height: this.props.wide ? `calc(33.33% - ${ SPACING - 6 }px) ` : `300px`
    , backgroundColor: `white`
    }

    tileBaseStyle = this.props.wide
      ? assign({}, tileBaseStyle, { float: `left` })
      : assign({}, tileBaseStyle, { display: `block`, margin: `0 auto` })

    const buttonStyle = assign({}, button, { backgroundColor: BABY_BLUE })

    const data = [1, 2, 3]
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
        <div style={ this.props.wide ? tileStyleWide : tileStyle }>
          <div>Image</div>
          <div>Title</div>
          <div>Description</div>
          <div>Slogan</div>
        </div>
      )
    })

    return (
      <div style={ textCenter }>
        <div style={ smallHeader }>Our Services</div>
        { tiles }
        <div><a style={ buttonStyle }>VIEW ALL SERVICES</a></div>
      </div>
    )
  }
}

export default OurServices
