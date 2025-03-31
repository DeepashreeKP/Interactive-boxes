function toggleBox(box) {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(b => {
    if (b !== box) {
      b.classList.remove('expanded');
    }
  });

  box.classList.toggle('expanded');
}