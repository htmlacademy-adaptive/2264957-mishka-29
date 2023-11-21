// SLIDER

if (document.querySelector('.slider') !==null) {
  const slides = document.querySelectorAll('.slider__item');
  const buttonPrev = document.querySelector('.slider__button--prev');
  const buttonNext = document.querySelector('.slider__button--next');
  let counter = 0;

  const clearClasses = () => {
    document.querySelector('.slider__item--current').classList.remove('slider__item--current');
  };

  buttonPrev.addEventListener('click', () => {
    clearClasses();
    counter = counter - 1;
    if (counter < 0) {
      counter = slides.length - 1;
    }

    slides[counter].classList.add('slider__item--current');
  });

  buttonNext.addEventListener('click', () => {
    clearClasses();
    counter = counter + 1;
    if (counter > slides.length - 1) {
      counter = 0;
    }
    slides[counter].classList.add('slider__item--current');
  });
}
