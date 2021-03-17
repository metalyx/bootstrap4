$(document).ready(function() {
    $('#mycarousel').carousel({interval: 2000});
    $('#carouselButton').click(function() {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }

    });

    $('#closeReserveModal').click(function() {
        $(this).attr('data-dismiss', 'modal');
    });
    $('#cancelReserveModal').click(function() {
        $(this).attr('data-dismiss', 'modal');
    });

    $('#loginButtonNav').click(function() {
        $(this).attr('data-toggle', 'modal');
        $(this).attr('data-target', '#loginModal');
    });
    $('#closeLoginModal').click(function() {
        $(this).attr('data-dismiss', 'modal');
    });
    $('#cancelLoginModal').click(function() {
        $(this).attr('data-dismiss', 'modal');
    });

    $('#openReserveTable').click(function() {
        $(this).attr('data-toggle', 'modal');
        $(this).attr('data-target', '#reserveModal');
    })
});