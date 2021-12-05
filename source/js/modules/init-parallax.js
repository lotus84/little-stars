

const initParallax = () => {
  const parallaxElements = document.querySelectorAll('.js-parallax');

  if (!parallaxElements.length) {
    return;
  }

  console.log('Hellow World!')

  parallaxElements.forEach((item) => {
    const rellax = new Rellax(item);
  });
};

export {initParallax};
