import './styles.scss';
import homePage from './home.js';
import aboutPage from './about.js';
import menuPage from './menu.js';
import contactPage from './contact.js';

const navBtns = document.querySelectorAll('.nav-option');

homePage(content)
let currentPage = "home"

navBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const value = e.currentTarget.dataset.id;
    const content = document.querySelector('#content');
    if (value === 'home' && currentPage !== value) {
      homePage(content);
      currentPage = value
    } else if (value === 'about' && currentPage !== value) {
      aboutPage(content);
      currentPage = value
    } else if (value === 'menu' && currentPage !== value) {
      menuPage(content);
      currentPage = value
    } else if (value === 'contact' && currentPage !== value) {
      contactPage(content);
      currentPage = value
    }
  });
});
