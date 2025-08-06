// Đọc danh sách người dùng từ localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

// Lưu người dùng mới vào localStorage
function saveUser(user) {
    const users = getUsers();
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
}

// Xử lý đăng ký
const registerForm = document.getElementById("register-form");
if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Mật khẩu xác nhận không khớp!");
            return;
        }

        const users = getUsers();
        if (users.find(user => user.username === username)) {
            alert("Tên đăng nhập đã tồn tại!");
            return;
        }

        saveUser({ name, username, password });
        alert("Đăng ký thành công! Mời bạn đăng nhập.");
        window.location.href = "login.html";
    });
}

// Xử lý đăng nhập
const loginForm = document.getElementById("login-form");
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;


        const users = getUsers();
        const user = users.find(u => u.username === username && u.password === password);

        if (!user) {
            alert("Tên đăng nhập hoặc mật khẩu sai!");
            return;
        }

        localStorage.setItem("loggedInUser", JSON.stringify(user));
        alert("Đăng nhập thành công!");
        window.location.href = "index.html";
    });
}

// Gợi ý xử lý đăng xuất (trên index.html)
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}
