(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    var burger = document.querySelector(".da-burger");
    var nav = document.querySelector(".da-nav");
    if (burger && nav) {
      burger.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        burger.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    // Shrink header on scroll
    var header = document.querySelector(".da-header");
    if (header) {
      window.addEventListener("scroll", function () {
        header.classList.toggle("is-scrolled", window.scrollY > 40);
      });
    }

    // Reveal on scroll
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".da-card, .da-step, .da-dept, .da-why-item").forEach(function (el) {
      el.classList.add("da-reveal");
      io.observe(el);
    });
  });
})();
