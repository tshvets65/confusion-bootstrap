$(document).ready(function() {
    $('#loginButton').click(function(){
        $('#loginModal').modal('show');
    });

    $('#reserveButton').click(function(){
        $('#reserveModal').modal('show');
    });

    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        console.log('clicked');
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children('span').removeClass('fa-pause').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children('span').removeClass('fa-play').addClass('fa-pause');
        }     
    });

    
});