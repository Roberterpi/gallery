let currentlySelected = 0;
const nodes = document.querySelectorAll(".gallery-img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");


function init() {
  prevBtn.addEventListener("click", function() {
    previous();
  });

  nextBtn.addEventListener("click", function(e) {
    next();
  });
}

init();