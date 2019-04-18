var colors = require('colors')

module.exports = {
    info: function (msg) {
        console.log(colors.green(msg))
    }
}