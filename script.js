let liItems = document.querySelectorAll('ul li');
let index = 0;
window.show = function (increase) {
  index = +increase;
  index = Math.min(Math.max(index, 0), liItems.length - 1);
  liItems[index].scrollIntoView({ behavior: 'smooth' });
};
