// Мобільне меню
const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');
if (burger && menu) {
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
}

// Вкладки календарного планування (5 / 6 клас)
document.querySelectorAll('.tab[aria-controls]').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab[aria-controls]').forEach(t => {
      const on = t === tab;
      t.setAttribute('aria-selected', on);
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  });
});
