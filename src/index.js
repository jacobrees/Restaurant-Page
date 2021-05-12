import './styles.scss';
import homePage from './home.js';
import aboutPage from './about.js';
import menuPage from './menu.js';

const navBtns = document.querySelectorAll('.nav-option');

navBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const value = e.currentTarget.dataset.id;
    const content = document.querySelector('#content');
    if (value === 'home') {
      homePage(content);
    } else if (value === 'about') {
      aboutPage(content);
    } else if (value === 'menu') {
      menuPage(content);
    } else if (value === 'contact') {
      content.innerHTML = '';
    }
  });
});
