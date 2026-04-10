// 🔁 Page Switch
function showPage(pageId) {
  document.getElementById("signup-page").classList.add("hidden");
  document.getElementById("login-page").classList.add("hidden");
  document.getElementById(pageId).classList.remove("hidden");
}

// 🎯 Elements
const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const goLogin = document.getElementById("goLogin");
const goSignup = document.getElementById("goSignup");
const logoutBtn = document.getElementById("logoutBtn");

// 🔗 Navigation
goLogin.addEventListener("click", () => showPage("login-page"));
goSignup.addEventListener("click", () => showPage("signup-page"));

// 📝 Signup
signupBtn.addEventListener("click", () => {
  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  if (!username || !email || !password) {
    alert("Fill all fields");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let exists = users.find(user => user.username === username);
  if (exists) {
    alert("User already exists!");
    return;
  }

  users.push({ username, email, password });

  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup successful!");
  showPage("login-page");
});

// 🔐 Login
loginBtn.addEventListener("click", () => {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let validUser = users.find(
    user => user.username === username && user.password === password
  );

  if (validUser) {
    alert("Login successful!");

    localStorage.setItem("currentUser", JSON.stringify(validUser));

    showUsersPage();
    fetchUsers();
  } else {
    alert("Invalid credentials");
  }
});

// 🔓 Logout
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("currentUser");

  document.getElementById("user-section").classList.add("hidden");
  document.getElementById("auth-container").classList.remove("hidden");
});

// 🔁 Auto Login
window.onload = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser) {
    showUsersPage();
    fetchUsers();
  }
};

// 📦 Show Users Page
function showUsersPage() {
  document.getElementById("auth-container").classList.add("hidden");
  document.getElementById("user-section").classList.remove("hidden");
}

// 🌐 Fetch Users
function fetchUsers() {
  fetch("https://dummyjson.com/users")
    .then(res => res.json())
    .then(data => displayUsers(data.users))
    .catch(err => console.log(err));
}

// 🎨 Display Cards
function displayUsers(users) {
  const container = document.getElementById("user-container");

  container.innerHTML = "";

  users.forEach(user => {
    const card = document.createElement("div");

    card.className =
      "bg-slate-800 p-4 rounded-xl text-center shadow hover:scale-105 transition";

    card.innerHTML = `
      <img src="${user.image}" class="w-20 h-20 mx-auto rounded-full mb-3">
      <h3 class="text-lg font-semibold">${user.firstName} ${user.lastName}</h3>
      <p class="text-sm text-gray-400">${user.email}</p>
    `;

    container.appendChild(card);
  });
}