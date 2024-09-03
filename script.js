// Carousel
let liItems = document.querySelectorAll('ul.carousel > li');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

// Elements to animate
const animateElements = document.querySelectorAll('.animate');

let index = 0;

// Function to update the index of the carousel
window.showPrevious = function (decrease) {
  index = index - decrease;
  // infinite scrolling
  if (index < 0) index = liItems.length;
  index = Math.min(Math.max(index, 0), liItems.length - 1);
  liItems[index].scrollIntoView({ behavior: 'smooth' });
};

window.showNext = function (increase) {
  index = index + increase;
  // infinite scrolling
  if (index >= liItems.length) index = 0;
  index = Math.min(Math.max(index, 0), liItems.length - 1);
  liItems[index].scrollIntoView({ behavior: 'smooth' });
};

// Event listener for updating the carousel
prevButton.addEventListener('click', function () {
  showPrevious(1);
});

nextButton.addEventListener('click', function () {
  showNext(1);
});

animateElements.forEach((element, index) => {
  setTimeout(() => {
    element.classList.add('show');
  }, index * 250);
});
