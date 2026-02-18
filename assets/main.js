// Render tool cards
function renderTools(list) {
  const grid = document.getElementById('toolsGrid');
  const none = document.getElementById('noResults');
  grid.innerHTML = '';
  if (!list.length) {
    none.classList.remove('hidden');
    return;
  }
  none.classList.add('hidden');
  list.forEach(t => {
    const a = document.createElement('a');
    a.className = 'tool-card';
    a.href = t.url;
    a.innerHTML = `
      <div class="tool-icon">${t.icon}</div>
      <div class="tool-name">${t.name}</div>
      <div class="tool-desc">${t.desc}</div>
      <span class="tool-badge badge-${t.cat}">${t.cat}</span>
    `;
    grid.appendChild(a);
  });
}

// Filter logic
let activeCat = 'all';
let searchQ = '';

function filter() {
  let list = TOOLS;
  if (activeCat !== 'all') list = list.filter(t => t.cat === activeCat);
  if (searchQ) {
    const q = searchQ.toLowerCase();
    list = list.filter(t =>
      t.name.toLowerCase().includes(q) ||
      t.desc.toLowerCase().includes(q) ||
      t.cat.toLowerCase().includes(q)
    );
  }
  renderTools(list);
}

// Category tabs
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCat = btn.dataset.cat;
    filter();
  });
});

// Search
document.getElementById('search').addEventListener('input', e => {
  searchQ = e.target.value.trim();
  filter();
});

// Init
renderTools(TOOLS);
