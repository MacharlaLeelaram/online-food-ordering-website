let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartContainer = document.getElementById("cart-items");

let total = 0;

displayCart();

function displayCart() {

    cartContainer.innerHTML = "";

    total = 0;

    cart.forEach((item, index) => {

        if (!item.quantity) {
            item.quantity = 1;
        }

        total += item.price * item.quantity;

        cartContainer.innerHTML += `
            <div class="restaurant-card">

                <h3>${item.name}</h3>

                <p>Price: ₹${item.price}</p>

                <button onclick="decreaseQuantity(${index})">-</button>

                <span>${item.quantity}</span>

                <button onclick="increaseQuantity(${index})">+</button>

                <br><br>

                <button onclick="removeItem(${index})">
                    Remove
                </button>

            </div>
        `;
    });

    document.getElementById("total")
    .innerText = "Total Amount : ₹" + total;

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}

function increaseQuantity(index) {

    cart[index].quantity++;

    displayCart();
}

function decreaseQuantity(index) {

    if(cart[index].quantity > 1){

        cart[index].quantity--;

    }

    displayCart();
}

function removeItem(index) {

    cart.splice(index, 1);

    displayCart();
}