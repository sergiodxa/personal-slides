const { NOW_URL } = process.env
const { alias } = require('./now.json')

module.exports = {
  assetPrefix: NOW_URL ? `https://${alias[1]}` : 'http://localhost:3000'
}