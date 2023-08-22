const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const collapse = item.querySelector('.accordion-collapse');

  header.addEventListener('click', () => {
    const isOpen = collapse.style.display === 'block';

    collapse.style.display = isOpen ? 'none' : 'block';
    header.querySelector('.accordion-button').setAttribute('aria-expanded', !isOpen);
  });
});
