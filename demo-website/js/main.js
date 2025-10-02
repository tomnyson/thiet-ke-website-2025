/* Basic enhancements for navigation, forms, and dynamic data. */
document.addEventListener('DOMContentLoaded', () => {
  const now = new Date();
  document.querySelectorAll('.js-year').forEach((el) => {
    el.textContent = now.getFullYear();
  });

  const nav = document.querySelector('nav');
  const toggle = document.querySelector('[data-nav-toggle]');
  if (nav && toggle) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('is-open');
    });
  }

  document.querySelectorAll('form[data-ajax]').forEach((form) => {
    const message = form.querySelector('.form-message');
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || 'bạn';
      if (message) {
        message.textContent = `Cảm ơn ${name}! Thông tin của bạn đã được ghi nhận.`;
        message.classList.add('visible');
      }
      form.reset();
    });
  });
});
