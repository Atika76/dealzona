const TARGET_EMAIL = 'sajat@email.hu';

const productInput = document.getElementById('product');
const formMessage = document.getElementById('formMessage');
const menuToggle = document.getElementById('menuToggle');
const mainMenu = document.getElementById('mainMenu');
const searchInput = document.getElementById('productSearch');
const productCards = [...document.querySelectorAll('.product-card')];
const productCount = document.getElementById('productCount');
const emptyState = document.getElementById('emptyState');

document.querySelectorAll('.order-btn, .quote-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const product = btn.dataset.product || '';
    productInput.value = product;
    document.getElementById('rendeles').scrollIntoView({ behavior: 'smooth' });
  });
});

if (menuToggle && mainMenu) {
  menuToggle.addEventListener('click', () => {
    mainMenu.classList.toggle('show');
    menuToggle.setAttribute('aria-expanded', mainMenu.classList.contains('show') ? 'true' : 'false');
  });

  mainMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainMenu.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function updateProductFilter() {
  const q = (searchInput.value || '').toLowerCase().trim();
  let visible = 0;

  productCards.forEach((card) => {
    const text = (card.dataset.name || '').toLowerCase();
    const match = !q || text.includes(q);
    card.classList.toggle('hidden', !match);
    if (match) visible++;
  });

  productCount.textContent = `${visible} termék`;
  emptyState.classList.toggle('hidden', visible !== 0);
}

if (searchInput) searchInput.addEventListener('input', updateProductFilter);

document.getElementById('orderForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const product = document.getElementById('product').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !phone) {
    formMessage.textContent = 'Kérlek add meg a nevedet és a telefonszámodat.';
    formMessage.style.color = '#df5c1a';
    return;
  }

  const subject = encodeURIComponent(`DealZóna rendelés / érdeklődés - ${product || 'új kérés'}`);
  const body = encodeURIComponent(`Név: ${name}
Telefonszám: ${phone}
E-mail: ${email || '-'}
Termék: ${product || '-'}
Üzenet: ${message || '-'}`);

  formMessage.textContent = 'Megnyitjuk az e-mailt a kitöltött adatokkal...';
  formMessage.style.color = '#0f8c67';

  window.location.href = `mailto:${TARGET_EMAIL}?subject=${subject}&body=${body}`;
});
