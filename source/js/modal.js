if (document.querySelector('.modal') !==null) {
  const orderModal = document.querySelector('.modal');

  if (document.querySelector('.offer__order-buttoon') !==null) {
    const indexOrderLink = document.querySelector('.offer__order-buttoon');

    indexOrderLink.addEventListener('click', (evt) => {
      evt.preventDefault();
      orderModal.classList.add('modal--show');
    });
  }

  if (document.querySelectorAll('.catalog__item-button') !==null) {
    const catalogOrderLinks = document.querySelectorAll('.catalog__item-button');

    for (let i = 0; i < catalogOrderLinks.length; i++) {
      catalogOrderLinks[i].addEventListener('click', (evt) => {
        evt.preventDefault();
        orderModal.classList.add('modal--show');
      });
    }
  }

  if (document.querySelector('.video__button') !==null) {
    const catalogOrderAdditionalLink = document.querySelector('.video__button');

    catalogOrderAdditionalLink.addEventListener('click', (evt) => {
      evt.preventDefault();
      orderModal.classList.add('modal--show');
    });
  }

  orderModal.addEventListener('click', (evt) => {
    if (!evt.target.closest('.modal__order-message')) {
      orderModal.classList.remove('modal--show');
    }
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      if (orderModal.classList.contains('modal--show')) {
        evt.preventDefault();
        orderModal.classList.remove('modal--show');
      }
    }
  });
}
