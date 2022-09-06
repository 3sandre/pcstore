// Hero Carousel
const slider = document.querySelector('#glide_1');
if (slider) {
  new Glide(slider, {
    type: 'carousel',
    startAt: 0,
    autoplay: 3000,
    gap: 0,
    hoverpause: true,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: 'linear',
  }).mount();
}