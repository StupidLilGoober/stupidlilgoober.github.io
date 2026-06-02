// Select the toggle button
const toggleBtn = document.getElementById('switch-theme');

// Get the root HTML element
const rootEl = document.documentElement;

// Check for a saved theme preference, otherwise default to 'light'
const savedTheme = localStorage.getItem('theme') || 'light';
rootEl.setAttribute('data-theme', savedTheme);

// Toggle theme function
toggleBtn.addEventListener('click', () => {
  const currentTheme = rootEl.getAttribute('data-theme');
  let newTheme = 'light';

  if (currentTheme === 'light') {
    newTheme = 'dark';
  }

  rootEl.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});
