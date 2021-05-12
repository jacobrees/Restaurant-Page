import item1 from './imgs/item-1.jpeg';
import item2 from './imgs/item-2.jpeg';
import item3 from './imgs/item-3.jpeg';
import item4 from './imgs/item-4.jpeg';
import item5 from './imgs/item-5.jpeg';
import item6 from './imgs/item-6.jpeg';
import item7 from './imgs/item-7.jpeg';
import item8 from './imgs/item-8.jpeg';
import item9 from './imgs/item-9.jpeg';
import item10 from './imgs/item-10.jpeg';

export default function menuPage(content) {
  const foodItems = [['Fruity Pancakes', item1], ['Western Burger', item2], ['Strawberry Milkshake', item3], ['Fried Egg Toast', item4], ['Egg Burger', item5], ['Choco Milkshake', item6], ['Bacon Butty', item7], ['Classic Burger', item8], ['Classic Milkshake', item9], ['Steak', item10]];

  let html = '';
  html += '<div class="menu-jumbotron"><div class="food-items-container">';


  foodItems.forEach((item, index) => {
    html += `<div class="food-item">
      <h2 class="food-item-title">${item[0]}</h2>
      <img  class="food-item-img" src=${item[1]} alt="food-item-${index}">
      </div>`;
  });

  html += '</div></div>';

  content.innerHTML = html;
}
