import tracking from 'tracking'

/**
 * 在chrome下截屏可以渲染出图片，但是在微信里面不行
 */
export default class Face {
  constructor() {
    this.registEvent()
  }

  registEvent() {
    document.getElementById('J_FaceDetech').addEventListener('click', (e) => {
      let img = document.getElementById('J_ImgFace')
      let tracker = new tracking.ObjectTracker(['face', 'eye', 'mouth'])
      tracker.setStepSize(1.7)
      tracking.track('#J_FaceDetech', tracker)
      tracker.on('track', function(event) {
        event.data.forEach(function(rect) {
          window.plot(rect.x, rect.y, rect.width, rect.height)
        })
      })
      window.plot = function(x, y, w, h) {
        let rect = document.createElement('div')
        document.querySelector('.face-wrapper').appendChild(rect)
        rect.classList.add('rect')
        rect.style.width = w + 'px'
        rect.style.height = h + 'px'
        rect.style.left = (img.offsetLeft + x) + 'px'
        rect.style.top = (img.offsetTop + y) + 'px'
      }
    })
  }

}
