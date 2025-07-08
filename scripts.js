console.log("Running code in the JavaScript file");

let pizzaCatButton = document.getElementById("pizza-cat-button");

pizzaCatButton.addEventListener("click", pizzaCatButtonClicked);

function pizzaCatButtonClicked() {
    console.log("Add a pizza cat");

    let pizzaCatImage = document.createElement("img");

    pizzaCatImage.src = "pizza-cat.webp";

    document.body.appendChild(pizzaCatImage);
}

let vibeCatButton = document.getElementById("vibe-cat-button");

vibeCatButton.addEventListener("click", vibeCatButtonClicked);

function vibeCatButtonClicked() {
    console.log("Hey vibe button clicked");

    let vibeCatImage = document.createElement("img");

    vibeCatImage.src = "vibe-cat.gif";

    document.body.appendChild(vibeCatImage);
}