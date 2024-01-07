document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animated");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateOnScroll() {
        animatedElements.forEach(function (element) {
            if (isInViewport(element)) {
                element.classList.add("in-view");
            }
        });
    }
    animateOnScroll();

    window.addEventListener("scroll", animateOnScroll);
});
