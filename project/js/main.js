function openPoster(el) {
  const src = el.querySelector('img').src;
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lb');
  img.src = src;
  if (lb.showModal) lb.showModal();
  else lb.setAttribute('open', '');
  lb.addEventListener('click', () => lb.close());
}
