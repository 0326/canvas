/*
* The Entry
*/
import config from './config'
import QRCode from './qrcode'
import Html2canvas from './html2canvas'
import Face from './face'
import CanvasImg from './canvasimg'

new QRCode()
new Html2canvas()
new Face()
new CanvasImg()

let title = 'Hello ' + config.APP_NAME + '!'
document.getElementById('title').innerHTML = title
