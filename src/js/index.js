/*
* The Entry file
*/

// import 'babel-polyfill'
import config from './config'
import QRCode from './qrcode'

new QRCode()

let title = 'Hello ' + config.APP_NAME + '!'
document.getElementById('title').innerHTML = title

