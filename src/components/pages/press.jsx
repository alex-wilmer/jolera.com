import React from 'react'
import Radium from 'radium'
import Banner from '../banner.jsx'
import { footerMargin, max, greyBackground } from '../../style/style.jsx'
import { BLUE, BABY_BLUE } from '../../style/style-jsx'
import LearnMore from '../learn-more.jsx'

@Radium
export default class Press extends React.Component {
  render () {
    const img = 'https://www.petfinder.com/wp-content/uploads/2012/11/140272627-grooming-needs-senior-cat-632x475.jpg'
    
    const tiles = [
      {
        title: `yar1`,
        text: `nar1`,
        image: img
      }
    , {
        title: `yar2`,
        text: `nar2`,
        image: img
      }
    , {
        title: `yar3`,
        text: `nar3`,
        image: img
      }
    , {
        title: `yar3`,
        text: `nar3`,
        image: img
      }
    , {
        title: `yar3`,
        text: `nar3`,
        image: img
      }
    , {
        title: `yar3`,
        text: `nar3`,
        image: img
      }
    , {
        title: `yar3`,
        text: `nar3`,
        image: img
      }
    , {
        title: `yar3`,
        text: `nar3`,
        image: img
      }
    ]

    const gutter = 2

    const style = {
      img: {
        width: `${ 100 }%`
      , height: this.width 
      }
    , tile: {
        width: `${ 33.3 }%`
      , display: 'inline-block'
      , padding: `${ gutter / 2 }%`
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
    , loadMore: {
        padding: `${ 24 }px`
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
      <div style={[ footerMargin, greyBackground ]}>
        <Banner text={ bannerText } image={ bannerImage } />

        <div style={ max }>
          <div>{ tilediv }</div>
          <div style={ style.loadMore }>Load more</div>
        </div>
        <LearnMore />
      </div>
    )
  }
}