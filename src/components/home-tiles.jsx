import React from 'react'
import Radium from 'radium'
import HomeTile from './home-tile.jsx'
import { SPACING, BLUE } from '../style/style-consts.jsx'
import assign from 'object-assign'

@Radium
export default class HomeTiles extends React.Component {
  render () {
    const style = {
      wrapper: {
        width: `290px`
      , margin: `0 auto`
      , padding: `${ SPACING } 0`
      }
    , secondTileRow: {
        marginTop: SPACING
      }
    , tile: {
        width: `135px`
      , height: `135px`
      , display: `inline-block`
      , color: `white`
      , textAlign: `center`
      , verticalAlign: `top`
      , padding: `${ SPACING / 2 }px`
      , fontSize: `0.8em`
      }
    }

    const tileWrapper = this.props.wide
      ? assign({}, style.wrapper, {
          position: `absolute`
        , right: 0
        })

      : style.wrapper

    const tiles = [
        { text: 'PRODUCTS AND SERVICES', link: '/', img: `img/icons/fork-knife.png` }
      , { text: 'ABOUT US', link: '/', img: `img/icons/avatar.png` }
      , { text: 'PRESS', link: '/', img: `img/icons/news.png` }
      , { text: 'SOCIAL RESPONSIBILITY', link: '/', img: `img/icons/leaf.png` }
    ]

    const topTiles = tiles.filter((info, i) => i < 2).map(mapTile)
    const bottomTiles = tiles.filter((info, i) => i > 1).map(mapTile)

    function mapTile (info, i) {
      const tileStyle = i
        ? assign({}, style.tile, { marginLeft: SPACING })
        : style.tile

      return (
        <HomeTile
          key={ i }
          text={ info.text }
          link={ info.link }
          img={ info.img }
          style={ tileStyle } />
      )
    }

    return (
      <div style={ tileWrapper }>
        <div>{ topTiles }</div>
        <div style={ style.secondTileRow }>{ bottomTiles }</div>
      </div>
    )
  }
}
