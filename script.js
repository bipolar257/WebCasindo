const button = document.getElementById("scrollButton");

button.addEventListener("click", () => {
  // Enable scrolling
  document.documentElement.style.overflow = "auto";
  document.body.style.overflow = "auto";

  // Scroll to section 2
  document.getElementById("services").scrollIntoView({
    behavior: "smooth",
  });
});

document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    const targetId = link.getAttribute("href").substring(1); // Extract the target ID from href
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Enable scrolling
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";

      // Scroll to the target section
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const ButtonHub = document.querySelector(".contact-us");
const modalitem = document.querySelector("#modal-content");

ButtonHub.onclick = (e) => {
  modalitem.style.display = "flex";
  e.preventDefault();
};
//close modal button
document.querySelector(".button-close").onclick = function (e) {
  modalitem.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal-close").onclick = function (e) {
  modalitem.style.display = "none";
  e.preventDefault();
};

window.addEventListener("load", function () {
  window.scrollTo(0, 0); // Move the scroll position to the top of the page
});

ScrollReveal({
  reset: false,
  distance: "200px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".text-content", { origin: "left" });
ScrollReveal().reveal(".gambarhome", { origin: "left" });
ScrollReveal().reveal(".services", { origin: "left" });
ScrollReveal().reveal(".blog-content", { origin: "right" });
