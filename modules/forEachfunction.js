const sections = document.querySelectorAll('.section');

const menuItems = document.querySelectorAll('.menu-item');

const navigateTo = (className) => {
  sections.forEach((item) => (item.classList.contains(className) ? item.classList.add('active') : item.classList.remove('active')));
};

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    navigateTo(menuItem.dataset.section);
  });
});

export { navigateTo, menuItems };
