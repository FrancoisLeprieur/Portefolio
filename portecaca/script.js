document.querySelectorAll('.filtre').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filtre').forEach(b => b.classList.remove('actif'));
    btn.classList.add('actif');
    const cat = btn.dataset.filtre;
    document.querySelectorAll('.projet').forEach(card => {
      card.classList.toggle('masque', cat !== 'tous' && !card.dataset.cat.includes(cat));
    });
  });
});