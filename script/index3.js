const galleryPhotos = [];
let currentPhoto = 0;

function openLightbox(idx) {
  currentPhoto = idx;
  document.getElementById('lightboxImg').src = galleryPhotos[currentPhoto];
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function closeLightboxOnBg(e) {
  if (e.target === document.getElementById('lightbox')) closeLightbox();
}
function prevPhoto() {
  currentPhoto = (currentPhoto - 1 + galleryPhotos.length) % galleryPhotos.length;
  document.getElementById('lightboxImg').src = galleryPhotos[currentPhoto];
}
function nextPhoto() {
  currentPhoto = (currentPhoto + 1) % galleryPhotos.length;
  document.getElementById('lightboxImg').src = galleryPhotos[currentPhoto];
}
document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'ArrowLeft') prevPhoto();
  if (e.key === 'ArrowRight') nextPhoto();
  if (e.key === 'Escape') closeLightbox();
});

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function selectRoom(name, price) {
  showToast(`✓ "${name}" added — $${price}/night`);
}
function bookNow() { showToast('Redirecting to booking…'); }
function showRoomDetails(name) { showToast(`Loading details for ${name}…`); }
function showAllAmenities() { showToast('Showing all 45 amenities…'); }

document.getElementById('shareBtn').addEventListener('click', () => {
  if (navigator.share) {
    navigator.share({ title: 'Grand Azure Resort & Spa', url: location.href });
  } else {
    navigator.clipboard.writeText(location.href).then(() => showToast('Link copied to clipboard!'));
  }
});
document.getElementById('saveBtn').addEventListener('click', function() {
  const saved = this.classList.toggle('saved');
  showToast(saved ? '❤️ Saved to your wishlist' : 'Removed from wishlist');
  this.style.color = saved ? '#b61b4a' : '';
});
