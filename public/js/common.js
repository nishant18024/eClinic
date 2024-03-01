$(document).on('click', '.mobile-menutoggle2', function () {
    console.log("Clicked");
    $('.menu-listing').removeClass('active');
    $('.mj-menu-overlay').removeClass('active');
    $('.menu-listing2').toggleClass('active');
    $('.mj-menu-overlay-profile').toggleClass('active');

});
$('.mj-menu-overlay-profile').click(function () {
    $('.menu-listing2').removeClass('active');
    $('.mj-menu-overlay-profile').removeClass('active');
})
function launching() {
    alert('Launching Soon ');
}

$(document).ready(function () {


    $('#sexsualexpert-carousel').owlCarousel({
        autoplay: false,
        loop: true,
        margin: 30,
        dots: true,
        items: 4,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                margin: 10,
                nav: true,
                dots: true,
            },
            600: {
                items: 2,
                nav: true,
                dots: true
            },
            1000: {
                items: 4,
                nav: true,
                dots: true
            }
        }
    });

    $('.owl-carousel-topdoctor-slider').owlCarousel({
        loop: true,
        dots: true,
        margin: 16,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })

    $('.owl-carousel-blog-slider').owlCarousel({
        loop: true,
        dots: true,
        margin: 16,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })


    $('.owl-carousel-top-doctor').owlCarousel({
        loop: false,
        dots: true,
        margin: 16,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
    $('.owl-carousel-success-story').owlCarousel({
        loop: false,
        dots: true,
        margin: 16,
        width: '200px',
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
    $('.owl-carousel-mobile-banner').owlCarousel({
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
})

if (innerWidth < 400) {
    $('.page-heading').addClass('h6');
    $('.page-heading').removeClass('h4');
} else {
    $('.page-heading').addClass('h4');
    $('.page-heading').removeClass('h6');
}
if (innerWidth < 400) {
    $('.our-service-title').addClass('small');
} else {
    $('.our-service-title').removeClass('small');
}
$('.category-dis').click(async function () {

    var current_time = '08';
    $('.category-dis').removeClass('active')
    $(this).addClass('active')
    var doctorModelTitle = $('.category-dis.active').attr('data-name').replace(/-/g, " ");
    $('.modal-doctor-title').html(doctorModelTitle);


    await $.ajax({
        url: '#',
        type: 'post',
        data: { specilization: doctorModelTitle },
        success: function (res) {
            $('#bookingspecilization').val(doctorModelTitle);
            $('#modal-doctor-list').html(res);
        }
    });


    $('.category-container').hide();
    $('.doctor-container').show();
    $('.book-now-container').show();
})

$('.sspopup').click(function () {

    var url = $(this).attr('videourlSS');

    var doctorModelTitle = `  <video   id="vplyaer"   style="width:100%;"  poster=""  controls autoplay >
                            <source src="${url}" type="video/mp4">
                            <source src="movie.ogg" type="video/ogg">
                            Your browser does not support the video tag.
                        </video>`;

    $('#ssModal').modal('show');
    $('#ssVideo').html(doctorModelTitle);

})

$('.close_ssVideo').click(function () {
    $('.ssModal').modal('hide');
    //  $("#vplyaer").pause();       // Tag name used as a selector

    $('#vplyaer').get(0).pause()

})
$('.back-btn').click(function () {
    $('.category-container').show();
    $('.doctor-container').hide();
    $('.book-now-container').hide();
})
$('.form-book-submit').click(function () {
    var data = {
        category: $('.category-dis.active').attr('data-name'),
        submit: 1
    }
    $('#exampleModal').modal('hide');
    console.log(data);

})
function launching() {
    alert('Launching Soon ');
}

$(document).ready(function () {

    $('.owl-carousel-topdoctor-slider').owlCarousel({
        loop: true,
        dots: true,
        margin: 16,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })

    $('.owl-carousel-blog-slider').owlCarousel({
        loop: true,
        dots: true,
        margin: 16,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })


    $('.owl-carousel-top-doctor').owlCarousel({
        loop: false,
        dots: true,
        margin: 16,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
    $('.owl-carousel-success-story').owlCarousel({
        loop: false,
        dots: true,
        margin: 16,
        width: '200px',
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
    $('.owl-carousel-mobile-banner').owlCarousel({
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
})

if (innerWidth < 400) {
    $('.page-heading').addClass('h6');
    $('.page-heading').removeClass('h4');
} else {
    $('.page-heading').addClass('h4');
    $('.page-heading').removeClass('h6');
}
if (innerWidth < 400) {
    $('.our-service-title').addClass('small');
} else {
    $('.our-service-title').removeClass('small');
}
$('.category-dis').click(async function () {

    var current_time = '08';
    $('.category-dis').removeClass('active')
    $(this).addClass('active')
    var doctorModelTitle = $('.category-dis.active').attr('data-name').replace(/-/g, " ");
    $('.modal-doctor-title').html(doctorModelTitle);





    $('.category-container').hide();
    $('.doctor-container').show();
    $('.book-now-container').show();
})

$('.sspopup').click(function () {

    var url = $(this).attr('videourlSS');



    $('#ssModal').modal('show');
    $('#ssVideo').html(doctorModelTitle);

})

$('.close_ssVideo').click(function () {
    $('.ssModal').modal('hide');
    //  $("#vplyaer").pause();       // Tag name used as a selector

    $('#vplyaer').get(0).pause()

})
$('.back-btn').click(function () {
    $('.category-container').show();
    $('.doctor-container').hide();
    $('.book-now-container').hide();
})
$('.form-book-submit').click(function () {
    var data = {
        category: $('.category-dis.active').attr('data-name'),
        submit: 1
    }
    $('#exampleModal').modal('hide');
    console.log(data);

})
