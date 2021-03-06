import React from 'react'
import { SPACING, H2 } from '../style/style-consts.jsx'
import { smallHeader } from '../style/style.jsx'
import assign from 'object-assign'

import WhichOneAreYouTile from './which-one-are-you-tile.jsx'

export default class WhichOneAreYou {
  render () {
    const style = {
      wrapper: {
        textAlign: `center`
      , margin: `${ SPACING + 10 }px 0 ${ SPACING }`
      }
    , tile: {
        float: `left`
      , width: this.props.wide ? `calc(50% - ${ SPACING / 2 }px)` : `100%`
      , height: `250px`
      , padding: `30px`
      , color: `white`
      }
    , header: {
        fontSize: `${ H2 }em`
      }
    , description: {
        fontWeight: 300
      , fontSize: `1.1em`
      , paddingTop: `20px`
      }
    }

    const data = [{
      header: `CUSTOMERS`
    , description:
        `Learn more about our offerings and
         what we do to ensure the ultimate
         service experience`
    }, {
      header: `RESELLERS`
    , description:
        `Learn how you can expand your current
         technology offerings by easily bolting
         on items from our service menu`
    }]

    const whichOneAreYouTiles = data.map((m, i) => {
      let tileStyle = style.tile

      if (i) {
        tileStyle = this.props.wide
          ? assign({}, tileStyle, { marginLeft: `${ SPACING }px` })
          : assign({}, tileStyle, { marginTop: `${ SPACING }px` })
      }

      return (
        <WhichOneAreYouTile
          key={ i }
          header={ m.header }
          tileStyle={ tileStyle }
          headerStyle={ style.header }
          description={ m.description }
          descriptionStyle={ style.description } />
      )
    })

    return (
      <div style={ style.wrapper }>
        <div style={ smallHeader }>Which One Are You?</div>
        <div className='clearfix'>
          { whichOneAreYouTiles }
        </div>
      </div>
    )
  }
}
