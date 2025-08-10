document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);
  const p = products.find(x => x.id === id);

  const container = document.getElementById('product-detail');

  if (!p) {
    container.innerHTML = `
      <p>Sản phẩm không tồn tại.</p>
      <p><a href="index.html">Quay lại trang chủ</a></p>
    `;
    return;
  }

  container.innerHTML = `
    <div class="product-detail-card">
      <img src="${p.img}" alt="${p.name}" class="product-detail-img">
      <h2>${p.name}</h2>
      <p><strong>Giá:</strong> ${formatVND(p.price)}</p>
      <p><strong>Mô tả:</strong> ${p.description}</p>
      <div class="product-detail-actions">
        <button id="buy-now">Mua ngay</button>
        <a href="index.html">Quay lại</a>
      </div>
    </div>
  `;
  
  // Lưu vào danh sách hàng đã mua khi bấm "Mua ngay"
  document.getElementById('buy-now').addEventListener('click', () => {
    const purchased = JSON.parse(localStorage.getItem('purchased') || '[]');
    purchased.push({
      id: p.id,
      name: p.name,
      price: p.price,
      qty: 1,
      date: new Date().toISOString()
    });
    localStorage.setItem('purchased', JSON.stringify(purchased));
    alert('Cảm ơn bạn đã mua hàng!');
    window.location.href = 'purchased.html'; // Chuyển tới trang Hàng đã mua
  });
});
