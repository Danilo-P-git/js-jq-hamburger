var apri = $(".header-right a");
var chiudi = $(".close");
apri.click(
  function() {
    $('.hamburger-menu').addClass('active');

}
)
chiudi.click(
  function() {
    $('.hamburger-menu').toggleClass('active');

}
)
