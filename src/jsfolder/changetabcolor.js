export default function changeTabColor(Btns, event) {
  Btns.forEach((btn) => {
    btn.classList.remove('nav-active');
  });
  event.currentTarget.classList.add('nav-active');
}
