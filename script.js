const root = document.documentElement;
const themeBtn = document.getElementById('theme');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') root.classList.add('light');
if (themeBtn) {
  const setIcon = () => themeBtn.textContent = root.classList.contains('light') ? '🌞' : '🌙';
  setIcon();
  themeBtn.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
    setIcon();
  });
}

document.querySelectorAll('video').forEach(v => {
  const play = () => v.play().catch(()=>{});
  const stop = () => v.pause();
  v.addEventListener('mouseenter', play);
  v.addEventListener('mouseleave', stop);
});

document.querySelectorAll('[data-copy]').forEach(el => {
  el.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(el.dataset.copy);
      el.textContent = 'Copied!';
      setTimeout(() => el.textContent = 'Copy email', 1000);
    } catch {}
  });
});

const dlg = document.getElementById('viewer');
const imgEl = dlg?.querySelector('img');
document.querySelectorAll('.media img, .masonry img').forEach(img => {
  img.closest('button, a, figure')?.addEventListener('click', e => {
    if (!dlg || !imgEl) return;
    e.preventDefault();
    imgEl.src = img.src;
    dlg.showModal();
  });
});
dlg?.querySelector('.close')?.addEventListener('click', () => dlg.close());

document.getElementById('year').textContent = new Date().getFullYear();
