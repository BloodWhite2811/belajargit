$(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
    $(".navbar").fadeIn("slow").addClass("bg-navbar");
    } else {
    $(".navbar").removeClass("bg-navbar");
    }
    });
    
    $(".navbar-toggler").click(function() {
    $(".navbar").fadeIn("slow").addClass("bg-navbar");
    });

$('.datepicker').datepicker();
