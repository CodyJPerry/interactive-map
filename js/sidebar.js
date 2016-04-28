$(document).ready(function() {
    $(".sidebar").hide();
});

$("#sidebar-button").on('click', function() {
    $(".sidebar").toggleClass('slide-out');
    $(".sidebar").show();
});

