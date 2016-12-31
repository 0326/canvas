import html2canvas from 'html2canvas'

/**
 * 在chrome下截屏可以渲染出图片，但是在微信里面不行
 */
export default class Html2canvas {
  constructor() {
    this.$ctr  =document.body
    this.imgW = 300
    this.imgH = 300

    this.registEvent()
  }

  registEvent() {
    document.getElementById('J_Html2canvas').addEventListener('click', (e) => {
      console.log('click')
      html2canvas(this.$ctr, {
        width: this.imgW,
        height: this.imgH,
        onrendered: (canvas) => {
          console.log('rendered', canvas)
          document.body.appendChild(canvas)
        }
      })
    })
  }

}
