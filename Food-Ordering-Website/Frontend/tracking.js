let status =
localStorage.getItem("status") || "Pending";

document
.getElementById("order-status")
.innerText = status;