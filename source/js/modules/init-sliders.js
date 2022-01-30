const initSliders = () => {
  const sliderBlocks = document.querySelectorAll('.js-slider-block');

  if (!sliderBlocks.length) {
    return;
  }

  sliderBlocks.forEach((item) => {
    const swiperBlock = item.querySelector('.swiper');

    const swiper = new Swiper(swiperBlock, {
      lazy: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.gallery__swiper-button--next',
        prevEl: '.gallery__swiper-button--prev',
      },
      keyboard: true,
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 20,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 10,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20,
        },
      },
    });
  });
};

export {initSliders};
