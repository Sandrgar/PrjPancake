{
  let nav = document.querySelector(".nav");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("hiddenNav");
    } else {
      nav.classList.remove("hiddenNav");
    }

    lastScrollY = window.scrollY;
  });
}
