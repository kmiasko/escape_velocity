(() => {
  const hamburgerClicked = () => {
    const body = document.querySelector('body');
    body.classList.toggle('navbar-open');
  };

  const start = () => {
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', hamburgerClicked);
    window.removeEventListener('DOMContentLoaded', start);
  };

  window.addEventListener('DOMContentLoaded', start);
})();
