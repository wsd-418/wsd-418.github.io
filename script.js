const btn = document.getElementById('contactBtn');
btn.addEventListener('click', () => {
  const info = document.createElement('div');
  info.className = 'contact-info';
  info.innerHTML = '<p>Email: kai.miyazawa@example.com</p>';
  document.body.appendChild(info);
});
