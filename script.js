document.getElementById('year').textContent = new Date().getFullYear();

(() => {
  const root = document.documentElement;
  const button = document.getElementById('themeToggle');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
  let stored = null;
  try { stored = localStorage.getItem('bilal-theme'); } catch (_) {}
  const apply = (theme) => {
    root.dataset.theme = theme;
    button.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    button.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  };
  apply(stored === 'light' || stored === 'dark' ? stored : (systemDark.matches ? 'dark' : 'light'));
  button.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem('bilal-theme', next); } catch (_) {}
  });
})();

if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('.site-nav a')];
  const lookup = new Map(links.map(link => [link.getAttribute('href').slice(1), link]));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach(link => { link.classList.remove('active'); link.removeAttribute('aria-current'); });
      const active = lookup.get(entry.target.id);
      if (active) { active.classList.add('active'); active.setAttribute('aria-current', 'location'); }
    });
  }, { rootMargin: '-20% 0px -63% 0px' });
  document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
}
