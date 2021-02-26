const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const galerryImgs = document.querySelectorAll(".gallery-img");
let currentlySelected = 0;

prevBtn.addEventListener('click', function() {

});

nextBtn.addEventListener('click', function() {

  galerryImgs[currentlySelected].classList.remove('active');
  currentlySelected++; //currentlySelected = currentlySelected + 1
  galerryImgs[currentlySelected].classList.add('active');
  prevBtn.disabled = false;

  if (galerryImgs.lenght === currentlySelected + 1) {
    nextBtn.disabled = true;
  }
});

function init() {
  prevBtn.addEventListener("click", function() {
    previous();
  });

  nextBtn.addEventListener("click", function(e) {
    next();
  });
}

init();