const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galerryImgs = document.querySelectorAll('.gallery-img');
let currentlySelected = 0;

prevBtn.addEventListener('click', function() {
  galerryImgs[currentlySelected].classList.remove('active');
  currentlySelected--; //currentlySelected = currentlySelected - 1
  galerryImgs[currentlySelected].classList.add('active');
  nextBtn.disabled = false;

  if (currentlySelected === 0) {
    prevBtn.disabled = true;
  }
});

nextBtn.addEventListener('click', function() {

  galerryImgs[currentlySelected].classList.remove('active');
  currentlySelected++; //currentlySelected = currentlySelected + 1
  galerryImgs[currentlySelected].classList.add('active');
  prevBtn.disabled = false;

  if (galerryImgs.length === currentlySelected + 1) {
    nextBtn.disabled = true;
  }
});