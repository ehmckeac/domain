//
// $( function() {
//   $( ".resizable" ).resizable();
// } );


$(function() {
  $(".draggable").draggable();
} );


$(document).ready(function() {
    $("#backgrounds").click(function() {
        $("html, body").animate({
            scrollTop: $('html, body').get(0).scrollHeight
        }, 2000);
    });
});

$(document).ready(function() {
    $("#intro").click(function() {
        $("html, body").animate({
            scrollTop: $('html, body').get(0).scrollHeight
        }, 2000);
    });
});
