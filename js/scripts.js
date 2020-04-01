$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 1000 } );
    $("#carouselButton").click(function(){
        if($("#carouselButton").children("span").hasClass('fa-pause')){
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }else if($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
    $("#loginbutton").removeAttr("data-toggle");
    $("#loginbutton").removeAttr("data-target");
    $("#reservebutton").removeAttr("data-toggle");
    $("#reservebutton").removeAttr("data-target");
    $("loginbutton").click(function(){
        $("#loginModal").modal({
            show:'true';
        });
    });
    $("reservebutton").click(function(){
        $("#reservationmodal").modal({
            show:'true';
        });
    });
});

