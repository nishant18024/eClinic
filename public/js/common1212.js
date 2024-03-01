$(document).ready(function () {
    $('.owl-carousel-2').owlCarousel({ dots: true, margin: 20, responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 3 } } })
    $('.owl-carousel-3').owlCarousel({ loop: true, dots: true, margin: 40, responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 4 } } })
    $('.owl-carousel-4').owlCarousel({ dots: true, margin: 40, responsive: { 0: { items: 3 }, 600: { items: 4 }, 1000: { items: 8 } } })
    $('.video-overlay').click(function () {
        $('.video-overlay').removeClass('active')
        $(this).addClass('active')
        $(this).prev().click()
    })
    $('.video-player').click(function () {
        $.each($('.video-player').get(), function (key, value) {
            if ($('.video-player')[key].getAttribute('status') == 'play') {
                $('.video-player')[key].removeAttribute('controls')
                $('.video-player')[key].setAttribute('status', 'pause')
                $('.video-player').get(key).pause()
            }
        }); if ($(this).attr('status') == 'pause' && $(this).attr('current') == 1) {
            $(this).attr('status', 'pause')
            $(this).get(0).pause()
            $('.video-overlay').removeClass('active')
            $(this).removeAttr('controls', '')
            $('.video-player').attr('current', '0')
        } else if ($(this).attr('status') == 'pause' && $(this).attr('current') == 0) {
            $(this).attr('status', 'play')
            $(this).get(0).play()
            $(this).attr('controls', '')
            $('.video-player').attr('current', '0')
            $(this).attr('current', '1')
        } else {
            $(this).attr('status', 'pause')
            $(this).removeAttr('controls')
            $(this).get(0).pause()
            $('.video-overlay').removeClass('active')
            $(this).attr('current', '0')
        }
    })
    var currentScrollValue = 0; $(window).scroll(function (e) {
        if ($(this).scrollTop() > currentScrollValue) { $(".bottom_fix").addClass("d-block"); $(".bottom_fix").removeClass("d-none"); }
        if ($(this).scrollTop() < currentScrollValue) { $(".bottom_fix").removeClass("d-block"); $(".bottom_fix").addClass("d-none"); }
        currentScrollValue = $(this).scrollTop()
    }); $('.readMore').click(function (e) {
        e.preventDefault()
        $(this).prev().toggleClass('d-block')
        if ($(this).text() == "Read More") { $(this).text("Read Less") }
        else { $(this).text("Read More"); }
    })
})