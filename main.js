var apri = $(".header-right a");
var chiudi = $(".close");
apri.click(
  function() {
    // $('.hamburger-menu').addClass('active');
    $('.hamburger-menu').show('fast');


}
)
chiudi.click(
  function() {
    // $('.hamburger-menu').toggleClass('active');
$('.hamburger-menu').hide('fast');
}
)
