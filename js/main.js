(() => {
  const hamburgerClicked = (e) => {
    const body = document.querySelector('body');
    e.preventDefault();
    e.stopPropagation();
    body.classList.toggle('navbar-open');
  };

  const documentClicked = () => {
    const body = document.querySelector('body');

    if (body.classList.contains('navbar-open')) {
      body.classList.remove('navbar-open');
    }
  };

  const start = () => {
    const hamburger = document.querySelector('.hamburger');


    document.addEventListener('click', documentClicked);
    hamburger.addEventListener('click', hamburgerClicked);
    window.removeEventListener('DOMContentLoaded', start);
  };

  window.addEventListener('DOMContentLoaded', start);
})();
