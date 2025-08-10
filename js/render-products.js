let currentPage = 1;
const itemsPerPage = 6;
let currentFilter = { category: null, sale: null };

function renderProducts({ category = null, sale = null, page = 1 } = {}) {
  const productList = document.getElementById("product-list");
  const pagination = document.getElementById("pagination");
  if (!productList || !pagination) return;

  currentFilter = { category, sale };
  currentPage = page;

  // Cập nhật URL mà không reload
  const params = new URLSearchParams();
  if (category) params.set('category', category);
  if (sale !== null) params.set('sale', sale);
  if (page > 1) params.set('page', page);
  history.replaceState({}, '', `?${params.toString()}`);

  // Lọc sản phẩm
  let filteredProducts = products;
  if (category) {
    filteredProducts = filteredProducts.filter(
      p => p.category.toLowerCase() === category.toLowerCase()
    );
  }
  if (sale !== null) {
    filteredProducts = filteredProducts.filter(p => p.isSale === sale);
  }

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const productsToShow = filteredProducts.slice(start, end);

  // Xóa cũ & render mới
  productList.innerHTML = "";
  productsToShow.forEach(p => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Giá: ${formatVND(p.price)}</p>
      ${p.isSale ? `<span class="sale-badge">Khuyến mãi</span>` : ""}
      <a class="btn-detail" href="product.html?id=${p.id}">Xem chi tiết</a>
    `;
    productList.appendChild(card);
  });

  // Render phân trang
  pagination.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = (i === page) ? "active" : "";
    btn.addEventListener("click", () => {
      renderProducts({ ...currentFilter, page: i });
    });
    pagination.appendChild(btn);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const sale = params.has("sale") ? params.get("sale") === "true" : null;
  const page = params.has("page") ? parseInt(params.get("page"), 10) : 1;

  renderProducts({ category, sale, page });
});
