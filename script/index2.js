let timerSeconds = 8 * 3600 + 45 * 60 + 12;
  function updateTimer() {
    const h = Math.floor(timerSeconds / 3600);
    const m = Math.floor((timerSeconds % 3600) / 60);
    const s = timerSeconds % 60;
    document.getElementById('t-h').textContent = String(h).padStart(2,'0');
    document.getElementById('t-m').textContent = String(m).padStart(2,'0');
    document.getElementById('t-s').textContent = String(s).padStart(2,'0');
    if (timerSeconds > 0) timerSeconds--;
  }
  updateTimer();
  setInterval(updateTimer, 1000);

  // ── PRICE SLIDER ──
  function updatePrice(val) {
    document.getElementById('price-max').textContent = val >= 1000 ? '$1000+' : '$' + val;
  }

  // ── PAGINATION ──
  let currentPage = 1;
  function changePage(page) {
    if (page < 1 || page > 12) return;
    document.querySelectorAll('.page-btn:not(.ellipsis)').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById('pg-' + page);
    if (btn) btn.classList.add('active');
    currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ── MODALS ──
  function openSearchModal() { document.getElementById('search-modal').classList.add('open'); }
  function openSignIn() { document.getElementById('signin-modal').classList.add('open'); }
  function openMapModal() { document.getElementById('map-modal').classList.add('open'); }
  function closeAll() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
  }
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => { if (e.target === overlay) closeAll(); });
  });

  function applySearch() {
    const dest = document.getElementById('m-dest').value;
    const cin = document.getElementById('m-checkin').value;
    const cout = document.getElementById('m-checkout').value;
    const adults = document.getElementById('m-adults').value;
    const rooms = document.getElementById('m-rooms').value;
    document.getElementById('dest-val').textContent = dest;
    const fmt = d => {
      const [y,mo,da] = d.split('-');
      const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      return months[parseInt(mo)-1] + ' ' + parseInt(da);
    };
    document.getElementById('dates-val').textContent = fmt(cin) + ' – ' + fmt(cout) + ', ' + cin.split('-')[0];
    document.getElementById('travelers-val').textContent = adults + ' Adults, ' + rooms + ' Room' + (rooms>1?'s':'');
    closeAll();
  }

  function switchTab(tab, formId) {
    document.querySelectorAll('.signin-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('signin-form').style.display = formId === 'signin-form' ? '' : 'none';
    document.getElementById('create-form').style.display = formId === 'create-form' ? '' : 'none';
  }

  // ── HOVER EFFECTS on Book buttons ──
  document.querySelectorAll('.btn-book').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = '✓ Booked!';
      btn.style.background = '#16a34a';
      setTimeout(() => { btn.textContent = 'Book Now'; btn.style.background = ''; }, 2000);
    });
  });