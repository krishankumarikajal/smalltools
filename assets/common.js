// ===== THEME =====
(function() {
  const saved = localStorage.getItem('st-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
})();

function initTheme() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const update = () => {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.textContent = dark ? '☀️' : '🌙';
    btn.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
  };
  update();
  btn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('st-theme', next);
    update();
  });
}

// ===== COPY WITH TOAST =====
let toastTimer;
function copyText(text, btnEl) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('Copied!');
    if (btnEl) {
      btnEl.textContent = 'Copied!';
      btnEl.classList.add('copied');
      setTimeout(() => {
        btnEl.textContent = 'Copy';
        btnEl.classList.remove('copied');
      }, 1500);
    }
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('Copied!');
  });
}

function showToast(msg) {
  let t = document.getElementById('copyToast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'copyToast';
    t.className = 'copy-toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 1800);
}

// ===== PERSIST PREFERENCES =====
function savePref(key, val) {
  try { localStorage.setItem('st-' + key, JSON.stringify(val)); } catch(e) {}
}
function loadPref(key, def) {
  try {
    const v = localStorage.getItem('st-' + key);
    return v !== null ? JSON.parse(v) : def;
  } catch(e) { return def; }
}

// ===== INIT ON LOAD =====
document.addEventListener('DOMContentLoaded', initTheme);
