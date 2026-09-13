/* Mobile menu */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

/* Category filter + search */
const catTabs = document.querySelectorAll('.cat-tab');
const tiles = document.querySelectorAll('.calc-tile');
const searchInput = document.getElementById('calcSearch');
const noResults = document.getElementById('noResults');

let activeCat = 'all';

function applyFilters(){
  const term = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  tiles.forEach(tile => {
    const matchesCat = activeCat === 'all' || tile.dataset.cat === activeCat;
    const matchesSearch = tile.dataset.name.includes(term);
    const show = matchesCat && matchesSearch;
    tile.style.display = show ? '' : 'none';
    if(show) visibleCount++;
  });

  noResults.classList.toggle('show', visibleCount === 0);
}

catTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    catTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeCat = tab.dataset.cat;
    applyFilters();
  });
});

searchInput.addEventListener('input', applyFilters);