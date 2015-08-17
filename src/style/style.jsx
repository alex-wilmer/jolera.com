import 'babel-core/polyfill'
import consts from './style-consts.jsx'
import mixins from './style-mixins.jsx'

const header = Object.assign({},
  { backgroundColor: consts.BLUE, color: `white`, padding: `0 20px` }
, mixins.trueHeight(consts.HEADER_HEIGHT))

export default { header, max: Object.assign({}, mixins.max) }
