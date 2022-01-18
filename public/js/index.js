/*
 *  ====================================
 *  Code App kita
 *  Code di bawah ini tidak perlu diubah
 *
 */
$(document).ready(function () {
  App.getInstance()

  const options = {
    button: '#update-sw',
    toast: '.notification-update',
  }

  $('#changeColor').click(() => {
    $('.nav-wrapper.custom-theme').css('background-color', '#3949ab')
  })

  new SW(options)
})
