import QRCode2 from 'qrcode2'

export default class QRCode {
  constructor() {
    this.$genQRCode = document.getElementById('J_GenQRCode')
    this.$QRCodeInput = document.getElementById('J_QRCodeVal')
    this.$QRCode = document.getElementById('J_QRCode')
    this.qrWidth = this.qrHeight = 200
    this.colorDark = '#000'
    this.colorLight = '#fff'
    this.level = QRCode2.CorrectLevel.H
    this.qrstring = 'https://github.com/0326/canvas'
    this.qrcode = new QRCode2("J_QRCode", {
        text: this.qrstring,
        width: this.qrWidth,
        height: this.qrHeight,
        colorDark : this.colorDark,
        colorLight : this.colorLight,
        correctLevel : this.level
    })

    this.registEvent()
  }

  registEvent() {
    this.$genQRCode.addEventListener('click', () => {
      this.qrstring = this.$QRCodeInput.value

      if(!this.qrstring) {
        return this.$QRCodeInput.setAttribute('placeholder','请输入字符串')
      }

      this.$QRCode.innerHTML = ''
      this.qrcode = new QRCode2("J_QRCode", {
        text: this.qrstring,
        width: this.qrWidth,
        height: this.qrHeight,
        colorDark : this.colorDark,
        colorLight : this.colorLight,
        correctLevel : this.level
      })
    })
  }
}
