import './styles.scss';
import homePage from './home.js';
import aboutPage from './about.js';
import menuPage from './menu.js';
import contactPage from './contact.js';
import changeTabColor from './changetabcolor.js';

const content = document.querySelector('#content');

const navBtns = document.querySelectorAll('.nav-option');
let currentPage = 'home';
homePage(content);

navBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const value = e.currentTarget.dataset.id;
    if (value === 'home' && currentPage !== value) {
      homePage(content);
      currentPage = value;
      changeTabColor(navBtns, e);
    } else if (value === 'about' && currentPage !== value) {
      aboutPage(content);
      currentPage = value;
      changeTabColor(navBtns, e);
    } else if (value === 'menu' && currentPage !== value) {
      menuPage(content);
      currentPage = value;
      changeTabColor(navBtns, e);
    } else if (value === 'contact' && currentPage !== value) {
      contactPage(content);
      currentPage = value;
      changeTabColor(navBtns, e);
    }
  });
});
