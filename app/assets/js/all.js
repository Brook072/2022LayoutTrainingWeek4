$(document).ready(() => {
  $( "span.mdi-menu" ).click(function() {
    $(this).toggleClass("mdi-menu");
    $(this).toggleClass("mdi-close");
    $("nav.top-nav-sm").toggleClass("hidden")
    $("nav.top-nav-sm").toggleClass("flex")
  });
  $( "span.mdi-checkbox-blank-outline" ).click(function() {
    $(this).toggleClass("mdi-checkbox-blank-outline");
    $(this).toggleClass("mdi-checkbox-marked-outline");
  });
});