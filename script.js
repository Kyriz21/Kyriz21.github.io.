/* =========================
   PERSONALIZE BEFORE PUBLISH
   ========================= */
const PORTFOLIO = {
  email: "", // Contoh: "rahmad@email.com"
  linkedin: "", // Contoh: "https://www.linkedin.com/in/username/"
  github: "" // Contoh: "https://github.com/username"
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

// Mobile navigation
const menuToggle = $("#menuToggle");
const mainNav = $("#mainNav");
menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Buka menu" : "Tutup menu");
  mainNav.classList.toggle("open", !isOpen);
});
$$("#mainNav a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", "Buka menu");
}));

// Theme switch; preference is stored locally in the visitor's browser.
const themeToggle = $("#themeToggle");
const savedTheme = localStorage.getItem("rahmad-portfolio-theme");
if (savedTheme === "light") document.body.classList.add("light-theme");
themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  localStorage.setItem("rahmad-portfolio-theme", document.body.classList.contains("light-theme") ? "light" : "dark");
});

// Scroll progress
const progressBar = $("#scrollProgress");
const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  if (progressBar) progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
};
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

// Reveal elements when they enter the viewport.
const revealItems = $$(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("is-visible"));
}

// Project filters
const filterButtons = $$(".filter-btn");
const projectCards = $$(".project-card");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    projectCards.forEach(card => {
      const visible = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !visible);
    });
  });
});

// Contact setup
const emailLink = $("#emailLink");
const copyEmail = $("#copyEmail");
const contactHint = $("#contactHint");
const toast = $("#toast");
let toastTimer;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}
if (PORTFOLIO.email.trim()) {
  emailLink.href = `mailto:${PORTFOLIO.email.trim()}`;
  emailLink.addEventListener("click", () => {});
  copyEmail.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO.email.trim());
      showToast("Alamat email berhasil disalin.");
    } catch (error) {
      showToast(`Email: ${PORTFOLIO.email.trim()}`);
    }
  });
  contactHint.textContent = "Silakan hubungi saya melalui email untuk diskusi atau kolaborasi.";
} else {
  emailLink.addEventListener("click", event => {
    event.preventDefault();
    showToast("Tambahkan email kamu terlebih dahulu di script.js.");
  });
  copyEmail.addEventListener("click", () => showToast("Tambahkan email kamu terlebih dahulu di script.js."));
}

// Optional social links: only render a link when a real URL is supplied.
const contactSocials = $("#contactSocials");
[
  ["LinkedIn", PORTFOLIO.linkedin],
  ["GitHub", PORTFOLIO.github]
].forEach(([label, url]) => {
  if (!contactSocials || !url.trim()) return;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return;
    const link = document.createElement("a");
    link.href = parsed.href;
    link.textContent = `${label} ↗`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    contactSocials.appendChild(link);
  } catch (error) {
    // Ignore incomplete or invalid profile URLs until they are corrected.
  }
});

// Current year in footer
const yearNow = $("#yearNow");
if (yearNow) yearNow.textContent = new Date().getFullYear();
