$('#carouselSimilarProd').owlCarousel({
    margin: 0,
    loop: true,
    nav: true,
    stagePadding: 0,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 4
        },
        1400: {
            items: 5
        }
    }
});
$('#carouselBestSellers2').owlCarousel({
    margin: 0,
    loop: true,
    nav: true,
    stagePadding: 0,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 3
        },
        1400: {
            items: 3
        }
    }
});


$('#carouselBestSellers').owlCarousel({
    margin: 0,
    loop: true,
    nav: true,
    stagePadding: 0,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 4
        },
        1400: {
            items: 5
        }
    }
});

$('#carouselMediaCoverageHi').owlCarousel({
    margin: 28,
    loop: true,
    nav: true,
    stagePadding: 0,
    autoHeight: true,
    responsive: {
        0: {
            items: 2
        },
        768: {
            items: 4
        },
        1200: {
            items: 6
        }
    }
});
$('#carouselMediaCoverage').owlCarousel({
    margin: 28,
    loop: true,
    nav: true,
    stagePadding: 0,
    autoHeight: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});

$('#carouselSuccessStories').owlCarousel({
    margin: 28,
    loop: true,
    nav: true,
    stagePadding: 0,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});
$('#carouselBestSellers1, #carouselRecentView1, #carouselNutritionalProd1').owlCarousel({
    margin: 0,
    loop: false,
    nav: true,
    stagePadding: 0,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 2
        },
        1200: {
            items: 3
        },
        1400: {
            items: 4
        }
    }
});

$(document).on('change', '#variantpro', function () {
    let id = $(this).val();
    let medname = $(this).find(':selected').data('medname');
    window.location.href = '#' + id + '/' + medname;
});
$(document).on('click', '.mobile-menutoggle', function () {
    $('.menu-listing').toggleClass('active');
});
$(document).ready(function () {
    $('.pro_id').select2();
});
$(document).on('click', '.mobile-menutoggle', function () {
    $('.menu-listing').toggleClass('active');
});
