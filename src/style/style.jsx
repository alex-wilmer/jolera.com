import 'babel-core/polyfill'
import consts from './style-consts.jsx'
import mixins from './style-mixins.jsx'

const max = { maxWidth: `${ consts.MAX_WIDTH }px`, margin: `0 auto` }

const header = Object.assign({}, {
    backgroundColor: consts.BLUE
  , color: `white`
  , padding: `0 ${ consts.SPACING }px`
  }
, mixins.trueHeight(consts.HEADER_HEIGHT))

const footer = {
  position: `fixed`
, bottom: `0`
, width: `100%`
, height: consts.FOOTER_HEIGHT
, backgroundColor: consts.BLACK
, zIndex: -1
}

export default { max, header, footer }
