const products = [
  {
    id: 1,
    name: "Tai nghe AirPods Pro",
    price: 5200000,
    img: "../images/airpods.png",
    description: "Tai nghe không dây chống ồn chủ động, âm thanh sống động, tích hợp sạc nhanh.",
    category: "Phụ kiện",
    isSale: true
  },
  {
    id: 2,
    name: "iPad Pro 12.9 inch",
    price: 28900000,
    img: "../images/ipadpro.png",
    description: "Màn hình Liquid Retina XDR, chip M1/M2, hiệu năng mạnh mẽ cho công việc và giải trí.",
    category: "Máy tính bảng",
    isSale: false
  },
  {
    id: 3,
    name: "MacBook Pro M2",
    price: 35990000,
    img: "../images/macbookpro.png",
    description: "MacBook Pro với chip M2, pin lâu, thiết kế mỏng nhẹ, phù hợp lập trình & thiết kế.",
    category: "Laptop",
    isSale: false
  },
  {
    id: 4,
    name: "Samsung Galaxy S21 Ultra",
    price: 18490000,
    img: "../images/Ss21ultra.png",
    description: "Camera mạnh, màn hình 120Hz, pin lớn, trải nghiệm giải trí tuyệt vời.",
    category: "Điện thoại",
    isSale: true
  },
  {
    id: 5,
    name: "Apple Watch Series 8",
    price: 9490000,
    img: "../images/watch.png",
    description: "Đo sức khoẻ, theo dõi giấc ngủ, thông báo thông minh, chống nước.",
    category: "Phụ kiện",
    isSale: false
  },
  {
    id: 6,
    name: "iPhone 13 Pro Max",
    price: 26990000,
    img: "../images/Iphone13pmx.png",
    description: "Hiệu năng mạnh mẽ, camera chuyên nghiệp, pin ổn định.",
    category: "Điện thoại",
    isSale: false
  },
    {
    id: 7,
    name: "Apple Watch Series 5",
    price: 9490000,
    img: "../images/watch.png",
    description: "Đo sức khoẻ, theo dõi giấc ngủ, thông báo thông minh, chống nước.",
    category: "Phụ kiện",
    isSale: false
  },
    {
    id: 8,
    name: "Apple Watch Series 6",
    price: 9490000,
    img: "../images/watch.png",
    description: "Đo sức khoẻ, theo dõi giấc ngủ, thông báo thông minh, chống nước.",
    category: "Phụ kiện",
    isSale: false
  },
    {
    id: 9,
    name: "Apple Watch Series 7",
    price: 9490000,
    img: "../images/watch.png",
    description: "Đo sức khoẻ, theo dõi giấc ngủ, thông báo thông minh, chống nước.",
    category: "Phụ kiện",
    isSale: false
  }
];
function formatVND(n) {
  return n.toLocaleString('vi-VN') + '₫';
}