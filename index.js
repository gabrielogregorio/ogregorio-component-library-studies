
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ogregorio-component-library-studies.cjs.production.min.js')
} else {
  module.exports = require('./ogregorio-component-library-studies.cjs.development.js')
}
