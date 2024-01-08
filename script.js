document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animated");
  
    function isInViewport(element, percentVisible) {
      let rect = element.getBoundingClientRect(),
        windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
  
      return !(
        Math.floor(100 - ((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100) <
          percentVisible ||
        Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) <
          percentVisible
      );
    }
  
    function animateOnScroll() {
      animatedElements.forEach(function (element) {
        if (isInViewport(element, 30)) {
          element.classList.add("in-view");
        }
      });
    }
    animateOnScroll();
  
    window.addEventListener("scroll", animateOnScroll);
  });
  