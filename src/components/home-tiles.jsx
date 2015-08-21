import React from 'react'
import HomeTile from './home-tile.jsx'
import consts from '../style/style-consts.jsx'

class HomeTiles {
  render () {
    const style = {
      wrapper: {
        width: `270px`
      , margin: `0 auto`
      , padding: `${ consts.SPACING } 0`
      }
    , secondTileRow: {
        marginTop: consts.SPACING
      }
    , tile: {
        width: `125px`
      , height: `125px`
      , display: `inline-block`
      , color: `white`
      , backgroundColor: consts.BLUE
      , textAlign: `center`
      , verticalAlign: `top`
      , padding: `${ consts.SPACING / 2 }px`
      , fontSize: `0.8em`
      }
    }

    const tiles = [
        { text: 'PRODUCTS AND SERVICES', link: '/' }
      , { text: 'ABOUT US', link: '/' }
      , { text: 'PRESS', link: '/' }
      , { text: 'SOCIAL RESPONSIBILITY', link: '/' }
    ]

    const topTiles = tiles.filter((info, i) => i < 2).map(mapTile)
    const bottomTiles = tiles.filter((info, i) => i > 1).map(mapTile)

    function mapTile (info, i) {
      const tileStyle = i
        ? Object.assign({}, style.tile, { marginLeft: consts.SPACING })
        : style.tile

      return <HomeTile text={ info.text } link={ info.link } style={ tileStyle } />
    }

    return (
      <div style={ style.wrapper }>
        <div>{ topTiles }</div>
        <div style={ style.secondTileRow }>{ bottomTiles }</div>
      </div>
    )
  }
}

export default HomeTiles
