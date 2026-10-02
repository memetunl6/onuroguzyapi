// WhatsApp numaranızı buraya yazın (ülke kodu ile, başında + olmadan). Örn: 905321234567
const WHATSAPP_NUMBER = "900000000000";

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#site-nav");
const header = document.querySelector(".header");

function setWhatsappLinks() {
  const href = "https://wa.me/" + WHATSAPP_NUMBER;
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.href = href;
  });
}

function closeMenu() {
  nav.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
}

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", open ? "true" : "false");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Kaydırınca üst menüye ince çizgi
function onScroll() {
  header.classList.toggle("scrolled", window.scrollY > 10);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Bölümler ekrana girince yumuşak görünme
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = (i % 4) * 80 + "ms";
          entry.target.classList.add("gorundu");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("gorundu"));
}

// Yıl
const yil = document.getElementById("yil");
if (yil) yil.textContent = new Date().getFullYear();

setWhatsappLinks();
