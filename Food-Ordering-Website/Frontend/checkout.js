document
.getElementById("orderForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value;

    let phone =
    document.getElementById("phone").value;

    let address =
    document.getElementById("address").value;

    let order = {
        customerName: name,
        phone: phone,
        address: address,
        items: JSON.parse(
            localStorage.getItem("cart")
        ) || []
    };

    localStorage.setItem(
        "order",
        JSON.stringify(order)
    );

    alert("Order Placed Successfully");

    window.location.href ="success.html";

});