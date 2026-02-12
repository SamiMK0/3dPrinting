function updateCartCount() {
  const badge = document.getElementById("cart-count");
  if (!badge) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  badge.textContent = count;
  badge.style.display = count > 0 ? "inline-block" : "none";
}

document.addEventListener("DOMContentLoaded", updateCartCount);
