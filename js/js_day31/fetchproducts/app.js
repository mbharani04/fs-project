const container = document.getElementById("productContainer");

// Fetch products from API
fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => {
    displayProducts(data);
  })
  .catch(error => {
    console.log("Error fetching data:", error);
  });

// Display products
function displayProducts(products) {
  container.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");

    card.className = "bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition";

    card.innerHTML = `
      <img src="${product.image}" class="h-40 mx-auto object-contain" />
      <h2 class="text-lg font-semibold mt-4 line-clamp-2">${product.title}</h2>
      <p class="text-gray-600 text-sm mt-2">$${product.price}</p>
      <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600">
        Add to Cart
      </button>
    `;

    container.appendChild(card);
  });
}