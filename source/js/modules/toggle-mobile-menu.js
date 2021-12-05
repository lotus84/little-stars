const toggleMobileMenu = () => {
  const burgerBtn = document.querySelector('.js-burger-btn');
  const mobileMenu = document.querySelector('.js-mobile-menu');

  if (!burgerBtn || !mobileMenu) {
    return;
  }

  const closeBtn = mobileMenu.querySelector('.js-close-btn');

  const openMenu = (menu) => {
    menu.classList.add('active');

    window.disableBodyScroll(menu, {
      reserveScrollBarGap: true,
    });
  };

  const closeMenu = (menu) => {
    menu.classList.remove('active');

    setTimeout(() => {
      window.enableBodyScroll(menu);
    }, 300);
  };

  burgerBtn.addEventListener('click', () => {
    openMenu(mobileMenu);
  });

  closeBtn.addEventListener('click', () => {
    closeMenu(mobileMenu);
  });
};

export {toggleMobileMenu};
