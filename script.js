const phone = "96181604296";

const menu = [
  { name: "Shawarma Sandwich", price: 5 },
  { name: "Turkish Shawarma", price: 6 },
  { name: "Half Kilo Shawarma", price: 14 },
  { name: "1 Kilo Shawarma", price: 25 },
  { name: "Shrimp Sandwich", price: 6 },
  { name: "10 Pieces Shrimp Meal", price: 7 },
  { name: "15 Pieces Shrimp Meal", price: 10 },
  { name: "1 Kilo Shrimp", price: 20 },
  { name: "Chicken Broasted", price: 14 },
  { name: "Half Chicken Broasted", price: 9 },
  { name: "5 Pieces Crispy", price: 10 },
  { name: "Twister Sandwich", price: 6 }
];

const cart = [];

const cards = document.querySelectorAll(".card");
const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");
const whatsappBtn = document.getElementById("whatsappBtn");

cards.forEach((card, index) => {

  card.addEventListener("click", () => {

    const found = cart.find(item => item.name === menu[index].name);

    if(found){
      found.qty++;
    }else{
      cart.push({
        name: menu[index].name,
        price: menu[index].price,
        qty:1
      });
      card.classList.add("selected");
    }

    renderCart();

  });

});

function renderCart(){

  cartItems.innerHTML="";

  let sum=0;

  cart.forEach(item=>{

    sum += item.price * item.qty;

    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>

        <input
        type="number"
        min="1"
        value="${item.qty}"
        onchange="changeQty('${item.name}',this.value)">

        <strong>$${item.price*item.qty}</strong>
      </div>
    `;

  });

  total.innerText=sum;

}

function changeQty(name,qty){

  qty=parseInt(qty);

  const item=cart.find(i=>i.name===name);

  if(!item) return;

  if(qty<=0){

    cart.splice(cart.indexOf(item),1);

    cards.forEach(card=>{
      if(card.querySelector("h3").innerText.includes(name)){
        card.classList.remove("selected");
      }
    });

  }else{

    item.qty=qty;

  }

  renderCart();

}

whatsappBtn.addEventListener("click",()=>{

  if(cart.length===0){

    alert("Please select at least one item.");

    return;

  }

  let text="Hello AL AMIR,%0A%0AI would like to order:%0A";
  let sum=0;

  cart.forEach(item=>{

    text += `%0A• ${item.name} x${item.qty}`;
    sum += item.price*item.qty;

  });

  text += `%0A%0ATotal: $${sum}`;

  window.open(`https://wa.me/${phone}?text=${text}`,"_blank");

});
