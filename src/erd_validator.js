var regexp = new RegExp('^(erd)([a-z0-9]{59})$') // bnb + 39 a-z0-9

module.exports = {
  isValidAddress: function (address, currency, networkType) {
    let match = regexp.exec(address)
    return match !== null
  }
}
