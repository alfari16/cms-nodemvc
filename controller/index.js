const fs = require('fs')

const root = {}
fs.readdirSync(__dirname)
  .forEach(file => {
    const name = file.replace(/\..*$/gms, '')
    root[name] = require(`./${name}`)
  })


module.exports = root
