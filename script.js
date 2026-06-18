// TnSBench demo site — outline scrollspy, reading progress, mobile nav.

const tocLinks = Array.from(document.querySelectorAll("#toc a"));
const sections = tocLinks
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const progress = document.getElementById("progress");
const outline = document.getElementById("outline");
const menuToggle = document.getElementById("menuToggle");
const scrim = document.getElementById("scrim");

// --- Reading progress bar ---
const updateProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
  progress.style.width = `${Math.min(pct, 100)}%`;
};

// --- Scrollspy: highlight the active outline entry ---
const setActive = (id) => {
  tocLinks.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (visible.length > 0) setActive(visible[0].target.id);
  },
  { rootMargin: "-72px 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
);
sections.forEach((s) => observer.observe(s));

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

// --- Mobile outline drawer ---
const toggleOutline = () => {
  outline.classList.toggle("open");
  scrim.classList.toggle("show");
};
menuToggle.addEventListener("click", toggleOutline);
scrim.addEventListener("click", toggleOutline);

// Close the drawer after picking a section on small screens.
tocLinks.forEach((a) =>
  a.addEventListener("click", () => {
    if (outline.classList.contains("open")) toggleOutline();
  })
);
