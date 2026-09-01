const button = document.getElementById('actionButton');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (button) {
  button.addEventListener('click', () => {
    const current = button.textContent;
    button.textContent = current === 'Launch now' ? 'Launched! ✅' : 'Launch now';
  });
}
