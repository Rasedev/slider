let slider = document.querySelectorAll('.slide');
let sliderArray = Array.from(slider);
console.log(sliderArray);

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function () {
  let activeSlider = document.querySelector('.active');
  console.log(activeSlider);
  let currentSlider = sliderArray.indexOf(activeSlider);
  console.log(currentSlider);

  function next() {
    let next;

    if (currentSlider == sliderArray.length - 1) {
      next = sliderArray[0];
      activeSlider.classList.remove('active');
      next.classList.add('active');
      //   console.log((next = sliderArray[0]));
    } else {
      next = sliderArray[currentSlider + 1];
      activeSlider.classList.remove('active');
      next.classList.add('active');
    }
  }
  next();
});

prev.addEventListener('click', function () {
  let activeSlider = document.querySelector('.active');
  //console.log(activeSlider);
  let currentSlider = sliderArray.indexOf(activeSlider);
  //console.log(currentSlider);

  function prev() {
    let prev;

    if (currentSlider == 0) {
      prev = sliderArray[sliderArray.length - 1];
      // activeSlider.classList.remove('active');
      // prev.classList.add('active');
      // //console.log((prev = sliderArray[0]));
    } else {
      prev = sliderArray[currentSlider - 1];
      // activeSlider.classList.remove('active');
      // prev.classList.add('active');
    }
    activeSlider.classList.remove('active');
    prev.classList.add('active');
  }
  prev();
});
