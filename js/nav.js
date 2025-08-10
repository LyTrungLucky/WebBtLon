document.addEventListener('DOMContentLoaded', () => {
  const submenuLinks = document.querySelectorAll('.submenu a');
  const saleLink = document.querySelector('a[href="#sale"]');

  // Click category
  submenuLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const category = e.target.textContent.trim();
      window.location.href = `index.html?category=${encodeURIComponent(category)}`;
    });
  });

  // Click sale
  if (saleLink) {
    saleLink.addEventListener('click', e => {
      e.preventDefault();
      window.location.href = `index.html?sale=true`;
    });
  }
});
