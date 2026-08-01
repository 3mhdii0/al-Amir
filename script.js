const phone = "96181604296";

const menu = [
  { name: "Shawarma Sandwich", price: 5 },
  { name: "Turkish Shawarma", price: 6 },
  { name: "Half Kilo Shawarma", price: 14 },
  { name: "1 Kilo Shawarma", price: 25 },
  { name: "Shrimp Sandwich", price: 6 },
  { name: "10 Pieces Shrimp Meal", price: 7 },
  { name: "15 Pieces Shrimp Meal", price: 10 },
  { name: "1 Kilo Shrimp", price: 20 }
];

document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".card");
  const order = [];

  cards.forEach((card, index) => {
    card.style.cursor = "pointer";

    card.addEventListener("click", () => {

      let qty = prompt(`Quantity for ${menu[index].name}:`, "1");

      if (qty === null) return;

      qty = parseInt(qty);

      if (isNaN(qty) || qty <= 0) return;

      order.push({
        item: menu[index].name,
        qty: qty,
        price: menu[index].price
      });

      alert(`${menu[index].name} added to your order.`);
    });
  });

  const btn = document.createElement("button");

  btn.innerText = "🛒 Order on WhatsApp";

  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.padding = "15px 22px";
  btn.style.border = "none";
  btn.style.borderRadius = "50px";
  btn.style.background = "#25D366";
  btn.style.color = "#fff";
  btn.style.fontWeight = "bold";
  btn.style.cursor = "pointer";
  btn.style.zIndex = "9999";

  document.body.appendChild(btn);

  btn.addEventListener("click", () => {

    if (order.length === 0) {
      alert("Please select at least one item.");
      return;
    }

    let total = 0;

    let text = "Hello AL AMIR,%0A%0AI would like to order:%0A%0A";

    order.forEach(item => {
      total += item.qty * item.price;
      text += `• ${item.item} x${item.qty} -
