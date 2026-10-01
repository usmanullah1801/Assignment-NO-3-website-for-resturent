function orderFood(foodName) {

    alert(
        "Thank you! Your order for " +
        foodName +
        " has been received."
    );
}

function sendMessage(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    alert(
        "Thank you " + name +
        "! Your message has been sent."
    );
}