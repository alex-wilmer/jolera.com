import React from 'react'
import Radium from 'radium'
import Banner from '../banner.jsx'
import { footerMargin, max, greyBackground } from '../../style/style.jsx'
import consts from '../../style/style-consts.jsx'

@Radium
export default class Press extends React.Component {
  render () {
    const img = 'https://www.petfinder.com/wp-content/uploads/2012/11/140272627-grooming-needs-senior-cat-632x475.jpg'
    const one = {
      title: `yar1`,
      text: `nar1`,
      image: img
    }
    const two = {
      title: `yar2`,
      text: `nar2`,
      image: img
    }
    const three = {
      title: `yar3`,
      text: `nar3`,
      image: img
    }
    const tiles = [ one, two, three, one, two, three, one, two, three ]

    const imgStyle = {
      width: `${ 100 }%`
    , height: this.width
    }

    const gutter = 2

    const tileStyle = {
      width: this.props.wide ? `${ 33.3 }%` : `100%`
    , display: 'inline-block'
    , padding: `${ gutter / 2 }%`
    }

    const innerTileStyle = {
      border: 'solid 1px grey'
    , ':hover': { cursor: 'pointer' }
    }

    const textBoxStyle = {
      padding: `${ 5 }px ${ 10 }px`
    }

    const headingStyle = {
      color: consts.BLUE
    , fontSize: `${ 24 }px`
    }

    const descriptionStyle = {
      color: consts.BLUE
    }

    const readMoreStyle = {
      color: consts.BABY_BLUE
    }

    const tilediv = tiles.map((t, i) => {
      return (
        <div style={ tileStyle }>
          <div key={ i } style={ innerTileStyle }>
            <div><img src={ t.image } style={ imgStyle } /></div>
            <div style={ textBoxStyle }>
              <div style={ headingStyle }>{ t.title }</div>
              <div style={ descriptionStyle }>{ t.text }</div>
              <div style={ readMoreStyle }>Read More</div>
            </div>
          </div>
        </div>
      )
    })

    const bannerText = {
      big: `Featured Article`
    , small: `Learn more about our projects and acheivements`
    }

    const bannerImage = `img/bg1.png`

    return (
      <div style={[ footerMargin, greyBackground ]}>
        <Banner text={ bannerText } image={ bannerImage } wide={ this.props.wide } />

        <div style={ max }>
          <div>{ tilediv }</div>
        </div>
      </div>
    )
  }
}
