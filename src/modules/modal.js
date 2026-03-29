const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const closeBtn = modal?.querySelector('.popup-close');

  const isMobile = () => window.innerWidth < 768;


  const showWithAnimation = () => {
    let opacity = 0;
    modal.style.opacity = opacity;
    modal.style.display = 'flex';

    const interval = setInterval(() => {
      opacity += 0.1;
      modal.style.opacity = opacity;
      if (opacity >= 1) clearInterval(interval);
    }, 30);
  };


  const showWithoutAnimation = () => {
    modal.style.display = 'flex';
    modal.style.opacity = '1';
  };


  const hideWithAnimation = () => {
    let opacity = 1;
    const interval = setInterval(() => {
      opacity -= 0.1;
      modal.style.opacity = opacity;
      if (opacity <= 0) {
        clearInterval(interval);
        modal.style.display = 'none';
      }
    }, 30);
  };

  
  const hideWithoutAnimation = () => {
    modal.style.display = 'none';
    modal.style.opacity = '1'; 
  };

 
  const show = () => {
    if (isMobile()) {
      showWithoutAnimation();
    } else {
      showWithAnimation();
    }
  };


  const hide = () => {
    if (isMobile()) {
      hideWithoutAnimation();
    } else {
      hideWithAnimation();
    }
  };

  buttons.forEach(b => b.addEventListener('click', show));
  closeBtn?.addEventListener('click', hide);
  modal?.addEventListener('click', e => e.target === modal && hide());
};

export default modal;
