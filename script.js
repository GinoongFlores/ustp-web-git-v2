let name = "Chan";
let age = 22;
const handler = "@ginoongflores";
let course = "Information Technology";
let year = "4th Year";
let motto = "Learning never stops."
const institution = "STI College Cagayan de Oro";

// Function to update card details

const updateCardDetails = () => {
    document.querySelector(".name").textContent = name;
    document.querySelector(".handler").textContent = handler;
    document.querySelector(".institution").textContent = institution;
    document.getElementById("age").textContent = age;
    document.getElementById("course").textContent = course;
    document.getElementById("year").textContent = year;
    document.getElementById("motto").textContent = motto;
}

// Event listener for the button to update card details
document.getElementById("updateButton").addEventListener("click", () => {
    updateCardDetails();
    alert("Card details updated!");
})