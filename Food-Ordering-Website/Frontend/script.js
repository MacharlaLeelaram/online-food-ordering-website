let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();

function addToCart(name, price) {

    let item = {
        name: name,
        price: price
    };

    cart.push(item);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    showToast();
}

function updateCartCount() {

    let cartCount =
    document.getElementById("cart-count");

    if(cartCount){

        cartCount.innerText = cart.length;

    }
}

function searchFood() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let cards = document
        .querySelectorAll(".restaurant-card");

    cards.forEach(card => {

        let foodName = card
            .querySelector("h3")
            .innerText
            .toLowerCase();

        if(foodName.includes(input)){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }
        

    });

}
function filterFood(category){

    let cards =
    document.querySelectorAll(".restaurant-card");

    cards.forEach(card => {

        if(category === "all"){

            card.style.display = "block";

        }
        else if(card.classList.contains(category)){

            card.style.display = "block";

        }
        else{

            card.style.display = "none";

        }

    });

}

let favorites =
document.querySelectorAll(".favorite");

favorites.forEach(fav => {

    fav.addEventListener("click", function(){

        if(fav.innerText === "🤍"){

            fav.innerText = "❤️";

        }
        else{

            fav.innerText = "🤍";
        }

    });

});

let darkBtn =
document.getElementById("dark-btn");

if(darkBtn){

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle(
            "dark-mode"
        );

    });

}