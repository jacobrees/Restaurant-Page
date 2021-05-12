import burgerImg from './imgs/front-view-burger-stand.jpg';

export default function homePage(content) {
  content.innerHTML = `<div class="home-jumbotron">
    <div class="home-jumbotron-text-section">
        <h2 class="home-jumbotron-title">BOBS <br>BURGER <br>JOINT</h2>
    </div>
    <div class="home-jumbotron-img-section">
        <img  class="home-jumbotron-img" src=${burgerImg} alt="front-view-burger">
        <a class="home-jumbotron-img-attribute" href='https://www.freepik.com/photos/food'>Food photo created by stockking - www.freepik.com</a>
    </div>
    </div>`;
}
