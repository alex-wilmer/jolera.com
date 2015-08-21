import React from 'react'
import consts from '../style/style-consts.jsx'
import style from '../style/style.jsx'

class OurServices {
  render () {
    let tileBaseStyle = {
      width: this.props.wide ? `calc(33.33% - ${ consts.SPACING - 6 }px) ` : `300px`
    , height: this.props.wide ? `calc(33.33% - ${ consts.SPACING - 6 }px) ` : `300px`
    , backgroundColor: `white`
    }

    tileBaseStyle = this.props.wide
      ? Object.assign({}, tileBaseStyle, { float: `left` })
      : Object.assign({}, tileBaseStyle, { display: `block`, margin: `0 auto` })

    const data = [1, 2, 3]
    const tiles = data.map((m, i) => {
      const tileStyleWide = i && this.props.wide
        ? Object.assign({}, tileBaseStyle, {
          marginLeft: `${ consts.SPACING }px`
        })
        : tileBaseStyle

      const tileStyle = i && !this.props.wide
        ? Object.assign({}, tileBaseStyle, {
          marginTop: `${ consts.SPACING }px`
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
      <div style={ style.textCenter }>
        <div>Our Services</div>
        { tiles }
        <div><a>VIEW ALL SERVICES</a></div>
      </div>
    )
  }
}

export default OurServices
