/*
 *  ====================================
 *  Code App kita
 *  Code di bawah ini tidak perlu diubah
 *
 */
$(document).ready(function () {
  App.getInstance();

  const options = {
    button: "#update-sw",
    toast: ".notification-update",
  };

  new SW(options);
});

function changeColorBG(color) {
  document
    .querySelector(".nav-wrapper.custom-theme")
    .setAttribute("style", `background-color: ${color} !important;`);
}
