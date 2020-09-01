// var menu = $(".fa-bars");
// var hamburger = $(".hamburger-menu")
$(".fa-bars").click(
  function() {
    $('.hamburger-menu').addClass('active');

}
)
$(".fa-times").click(
  function() {
    $('.hamburger-menu').toggleClass('active');

}
)
