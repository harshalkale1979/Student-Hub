// ===========================================================
// Student Hub — shared shell behavior (sidebar, mobile drawer)
// ===========================================================

function initShell() {
  const toggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const scrim = document.querySelector('.scrim');

  if (toggle && sidebar && scrim) {
    toggle.addEventListener('click', () => {
      sidebar.classList.add('open');
      scrim.classList.add('show');
    });
    scrim.addEventListener('click', () => {
      sidebar.classList.remove('open');
      scrim.classList.remove('show');
    });
    sidebar.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        sidebar.classList.remove('open');
        scrim.classList.remove('show');
      });
    });
  }

  // Highlight active nav link based on current file name
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.split('/').pop() === current) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', initShell);

// Simple local-storage helper used across tools
const StudentHubStore = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem('studenthub_' + key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem('studenthub_' + key, JSON.stringify(value));
    } catch (e) { /* storage full or unavailable */ }
  }
};
