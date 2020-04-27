//
// $( function() {
//   $( ".resizable" ).resizable();
// } );


$(function() {
  $(".draggable").draggable();
} );


$(document).ready(function() {
    $("h2").click(function() {
        $("html, body").animate({
            scrollTop: $('html, body').get(0).scrollHeight
        }, 2000);
    });
});
