var bars = document.querySelector('.bars.clickable-bar');
let bar_one = document.querySelector('.bar-1');
let bar_two = document.querySelector('.bar-2');
let bar_three = document.querySelector('.bar-3');
let menu_item = document.querySelector('.menu-item');
let item_list = document.querySelector('.item-list');

bars.addEventListener('click', function() {
  if(bars.dataset.clicked === '0') {
    bar_two.style.visibility = 'hidden';
    bar_one.style.transform = 'rotate(-40deg)';
    bar_one.style.marginTop = '7px';
    bar_three.style.transform = 'rotate(40deg)';
    bar_three.style.marginTop = '-7px';
    menu_item.style.marginRight = '0px';
    item_list.style.marginRight = '0px';
    bars.dataset.clicked = '1';
  } else {
    bar_one.removeAttribute('style');
    bar_three.removeAttribute('style');
    bar_two.style.visibility = 'visible';
    menu_item.style.marginRight = '-200px';
    item_list.style.marginRight = '-200px';
    bars.dataset.clicked = '0';
  }
  
});