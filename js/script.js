$('.menuSection .menuBlock .menu-list .item .img').height(
    $('.menuSection .menuBlock .menu-list .item .img').width()*9/16
)

new Swiper(".gallerySlider", {
    slidesPerView: 3,
    spaceBetween: 24,
    navigation: {
        nextEl: ".gallerySlider .swiper-button-next",
        prevEl: ".gallerySlider .swiper-button-prev",
    },
});

$('.menuListSection .menuListBlock .product .gallery .swiper .img img').on('click', function() {
    let link = $(this).attr('src'),
        linkMainPhoto = $('.menuListSection .menuListBlock .product .gallery > .img img')
    linkMainPhoto.attr('src', link)
})



