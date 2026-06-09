let order =
JSON.parse(localStorage.getItem("order"));

let ordersDiv =
document.getElementById("orders");

let orderStatus =
localStorage.getItem("status") || "Pending";

if(order){

    let itemsHTML = "";

    order.items.forEach(item => {

        itemsHTML += `
            <li>
                ${item.name} - ₹${item.price}
            </li>
        `;
    });

    document
.getElementById("total-orders")
.innerText = 1;

let revenue = 0;

order.items.forEach(item => {

    revenue += item.price;

});

document
.getElementById("total-revenue")
.innerText = "₹" + revenue;

document
.getElementById("current-status")
.innerText = orderStatus;

    ordersDiv.innerHTML = `

        <div class="order-card">

            <h3>Customer Details</h3>

            <p>
                <strong>Name:</strong>
                ${order.customerName}
            </p>

            <p>
                <strong>Phone:</strong>
                ${order.phone}
            </p>

            <p>
                <strong>Address:</strong>
                ${order.address}
            </p>

            <h4>Ordered Items</h4>

            <ul>
                ${itemsHTML}
            </ul>

            <p>
                <strong>Status:</strong>
                <span id="status">
                    ${orderStatus}
                </span>
            </p>

            <button onclick="acceptOrder()">
                Accept Order
            </button>

            <button onclick="deliverOrder()">
                Delivered
            </button>

        </div>

    `;

}

function acceptOrder(){

    localStorage.setItem(
        "status",
        "Preparing 🍳"
    );

    location.reload();
}

function deliverOrder(){

    localStorage.setItem(
        "status",
        "Delivered ✅"
    );

    location.reload();
}