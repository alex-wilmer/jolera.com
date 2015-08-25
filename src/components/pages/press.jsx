import React from 'react'
import Radium from 'radium'
import Banner from '../banner.jsx'
import LearnMore from '../learn-more.jsx'
import { footerMargin, max, greyBackground, button, babyBlue, textCenter } from '../../style/style.jsx'
import { BLUE, BABY_BLUE } from '../../style/style-consts.jsx'

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

    const xTileDivPadding = 30
    const gutterPadding = 0.5

    const style = {
      tileDiv: {
        padding: this.props.wide ? `${ xTileDivPadding }px 0px` : `30px 60px`
      }
    , tile: {
        width: this.props.wide ? `${ 33.3 }%` : `100%`
      , display: 'inline-block'
      , padding: `${ gutterPadding }%`
      }
    , img: {
        width: `${ 100 }%`
      }
    , innerTile: {
        border: 'solid 1px grey'
      , ':hover': { cursor: 'pointer' }
      }
    , textBox: {
        padding: `${ 5 }px ${ 10 }px`
      }
    , heading: {
        color: BLUE
      , fontSize: `${ 24 }px`
      }
    , description: {
        color: BLUE
      }
    , readMore: {
        color: BABY_BLUE
      }
    , evenBottomPad: {
        paddingBottom: `${ xTileDivPadding + gutterPadding }px`
      }
    }

    const tilediv = tiles.map((t, i) => {
      return (
        <div style={ style.tile }>
          <div key={ i } style={ style.innerTile }>
            <div><img src={ t.image } style={ style.img } /></div>
            <div style={ style.textBox }>
              <div style={ style.heading }>{ t.title }</div>
              <div style={ style.description }>{ t.text }</div>
              <div style={ style.readMore }>Read More</div>
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
      <div style={ [footerMargin, greyBackground] }>
        <Banner text={ bannerText } image={ bannerImage } wide={ this.props.wide } />

        <div style={ max }>
          <div style={ style.tileDiv }>{ tilediv }</div>
        </div>

        <div style={ textCenter }>
          <a style={ [button, babyBlue] }>LOAD MORE</a>
        </div>
        <div style={ style.evenBottomPad }></div>

        <LearnMore />
      </div>
    )
  }
}
