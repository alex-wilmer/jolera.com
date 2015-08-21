import React from 'react'
import HomeTile from './home-tile.jsx'
import consts from '../style/style-consts.jsx'

class HomeTiles {
  render () {
    const tiles = this.props.tiles
    const topTiles = tiles.info.filter((info, i) => i < 2).map(mapTile)
    const bottomTiles = tiles.info.filter((info, i) => i > 1).map(mapTile)

    function mapTile (info, i) {
      const tileStyle = i
        ? Object.assign({}, tiles.style, { marginLeft: consts.SPACING })
        : tiles.style

      return <HomeTile text={ info.text } link={ info.link } style={ tileStyle } />
    }

    return (
      <div style={ this.props.style }>
        <div>{ topTiles }</div>
        <div style={ this.props.tiles.style.secondTileRow }>{ bottomTiles }</div>
      </div>
    )
  }
}

export default HomeTiles
