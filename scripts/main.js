var myHeading = document.querySelector('h1');
myHeading.textContent = 'Georgy Sambarov';

var myHeading = document.querySelector('h2');
myHeading.textContent = 'Position for job';

document.addEventListener('DOMContentLoaded', () => {
  const accordionHeader = document.querySelector('.accordion__header');
  const accordionBody = document.querySelector('.accordion__body');

  if (accordionHeader && accordionBody) {
    accordionHeader.addEventListener('click', () => {
      // Проверяем, скрыт ли элемент сейчас
      const isCollapsed = accordionBody.classList.contains('collapse');
      
      if (isCollapsed) {
        accordionBody.classList.remove('collapse');
        accordionHeader.classList.add('accordion__header--active');
      } else {
        accordionBody.classList.add('collapse');
        accordionHeader.classList.remove('accordion__header--active');
      }
    });
  }
});
