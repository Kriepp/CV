let liItems = document.querySelectorAll('ul.carousel > li');
const items = Array.from(liItems);
let index = 0;
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

window.show = function (increase) {
  index = index + increase;
  index = Math.min(Math.max(index, 0), liItems.length - 1);
  liItems[index].scrollIntoView({ behavior: 'smooth' });
};

// Not working
prevButton.addEventListener('click', function () {
  show(-1);
});

// Working
nextButton.addEventListener('click', function () {
  show(1);
});
