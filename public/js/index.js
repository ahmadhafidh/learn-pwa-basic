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

function changeColor(color) {
  document.querySelector(".nav-wrapper.custom-theme").setAttribute("style", `background-color: ${color} !important;`);
}

// function menu1() {
//   changeColor("green");
// }
// function menu2() {
//   changeColor("yellow");
// }

// $("p").on("click", function () {
//   $("nav").css("background", "#ccc");
// });

// let a = document.getElementById('menu1')
// a.addEventListener('click', function() {
//   a.style.backgroundColor = 'green'
// })
