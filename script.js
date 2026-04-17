/* ── Nav active state ── */
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((s) => sectionObserver.observe(s));

/* ── Work-with-me drawer ── */
const workButton = document.getElementById('workButton');
const drawer     = document.getElementById('drawer');
const drawerClose = document.getElementById('drawerClose');

workButton?.addEventListener('click', () => drawer?.classList.add('active'));
drawerClose?.addEventListener('click', () => drawer?.classList.remove('active'));
window.addEventListener('click', (e) => {
  if (drawer?.classList.contains('active') && !drawer.contains(e.target) && e.target !== workButton) {
    drawer.classList.remove('active');
  }
});

/* ── Lightbox ── */
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
  <div class="lightbox-inner">
    <button class="lightbox-close" aria-label="Close">✕</button>
    <img src="" alt="" />
    <div class="lightbox-caption"></div>
  </div>
`;
document.body.appendChild(lightbox);

const lbImg     = lightbox.querySelector('img');
const lbCaption = lightbox.querySelector('.lightbox-caption');
const lbClose   = lightbox.querySelector('.lightbox-close');

function openLightbox(src, caption) {
  lbImg.src = src;
  lbImg.alt = caption || '';
  lbCaption.textContent = caption || '';
  lbCaption.style.display = caption ? 'block' : 'none';
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { lbImg.src = ''; }, 350);
}

lbClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

/* ── Certificate gallery: intercept clicks ── */
document.querySelectorAll('.cert-gallery a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const img = link.querySelector('img');
    openLightbox(link.href, img?.alt || '');
  });
});

/* ── Profile photo preview ── */
const profileImage = document.querySelector('.profile-image');
if (profileImage) {
  profileImage.addEventListener('click', () => {
    const img = profileImage.querySelector('img');
    openLightbox(img.src, 'Gurram Prem Sai');
  });
}
