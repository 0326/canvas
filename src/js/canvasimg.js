
/**
 * 在chrome下截屏可以渲染出图片，但是在微信里面不行
 */
export default class CanvasImg {
  constructor() {
    this.$canvas = window.$canvas = document.getElementById('J_Canvas')
    this.ctx =this.$canvas.getContext('2d')

    this.drawImg()
    this.initEvent()
  }

  initEvent() {
    document.getElementById('J_CanvasImgDld').addEventListener('click', (e) => {
      console.log('start downlaod..')
      let imgData = this.$canvas.toDataURL('image/jpeg',0.3)
      imgData = imgData.replace('image/jpeg', 'image/octet-stream')
    })
  }
  drawImg() {
    let img = new Image()
    // img.src = '/assets/panda.jpeg'
    img.src = '/assets/y.jpg'
    img.onload = () => {
      this.$canvas.width = img.width
      this.$canvas.height = img.height
      this.ctx.drawImage(img, 0, 0)// 100, 100)//, img.width, img.height)
      // window.imgData =this.ctx.getImageData(0, 0, img.width, img.height)
      // this.ctx.putImageData(this.sepiaFilter(window.imgData), 500, 0)
      document.getElementById('J_CanvasImg').src = this.$canvas.toDataURL('image/jpeg',0.3)
    }
  }
  sepiaFilter(pixels) {
    let d = pixels.data
    for (let i = 0; i < d.length; i += 4) {
      let r = d[i]
      let g = d[i + 1]
      let b = d[i + 2]
      d[i] = (r * 0.393)+(g * 0.769)+(b * 0.189) // red
      d[i + 1] = (r * 0.349)+(g * 0.686)+(b * 0.168) // green
      d[i + 2] = (r * 0.272)+(g * 0.534)+(b * 0.131) // blue
    }
    return pixels
  }
}
