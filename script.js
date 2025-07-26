document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "admin" && password === "1234") {
    alert("Giriş başarılı! Yönlendiriliyorsunuz...");
    window.location.href = "index.html"; // Ana sayfaya yönlendir
  } else {
    alert("Hatalı kullanıcı adı veya şifre.");
  }
});
