// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  const msg = document.getElementById('message');
  if (btn) btn.addEventListener('click', () => {
    if (msg) msg.textContent = '¡Botón clickeado! JS funciona correctamente.';
    btn.textContent = 'Gracias';
  });
});
