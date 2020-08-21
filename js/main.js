new WOW().init();

var mySwiper = new Swiper('.swiper-container', {
   pagination: {
      el: '.projects-pagination',
      bulletClass: 'project-bullet',
      bulletActiveClass: 'project-bullet--active',
      clickable: true,
      autoplay: {
         delay: 7000,
      },
      speed: 2800,
      type: 'bullets'
   },
});

let slider = document.querySelector('.swiper-wrapper');

slider.addEventListener('mousemove', () => {
   mySwiper.autoplay.stop();
});

slider.addEventListener('mouseout', () => {
   mySwiper.autoplay.start();
});

mySwiper.autoplay.start();