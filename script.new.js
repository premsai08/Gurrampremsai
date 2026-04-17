const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section');
const workButton = document.getElementById('workButton');
const drawer = document.getElementById('drawer');
const drawerClose = document.getElementById('drawerClose');

if (workButton && drawer) {
  workButton.addEventListener('click', () => {
    drawer.classList.add('active');
  });
}

if (drawerClose && drawer) {
  drawerClose.addEventListener('click', () => {
    drawer.classList.remove('active');
  });
}

window.addEventListener('click', (event) => {
  if (drawer && drawer.classList.contains('active') && !drawer.contains(event.target) && event.target !== workButton) {
    drawer.classList.remove('active');
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href='#${id}']`);
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove('active'));
        if (navLink) navLink.classList.add('active');
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((section) => observer.observe(section));
