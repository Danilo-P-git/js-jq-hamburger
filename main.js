var apri = $(".header-right a .fa-bars");
var chiudi = $(".close .fa-times");
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
