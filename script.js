window.addEventListener("scroll", () => {
  document.querySelectorAll(".section").forEach(sec => {
    if (window.scrollY + window.innerHeight - 200 > sec.offsetTop) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});
