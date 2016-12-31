/*
* The Entry
*/
import config from './config'
import QRCode from './qrcode'
import Html2canvas from './html2canvas'
import Face from './face'

new QRCode()
new Html2canvas()
new Face()

let title = 'Hello ' + config.APP_NAME + '!'
document.getElementById('title').innerHTML = title
