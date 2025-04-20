document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      return (rect.top <= windowHeight && rect.bottom >= 0);
    }
  
    function revealElements() {
      revealElements.forEach((el) => {
        if (isElementInViewport(el)) {
          el.classList.add('reveal_active');
        } else {
          el.classList.remove('reveal_active');
        }
      });
    }
  
    revealElements();
    window.addEventListener('scroll', revealElements);
  });
  