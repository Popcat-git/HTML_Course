console.log("Running code in the JavaScript file");

let pizzaCatButton = document.getElementById("pizza-cat-button");

pizzaCatButton.addEventListener("click", pizzaCatButtonClicked);

function pizzaCatButtonClicked() {
    console.log("Add a pizza cat");

    let howManyCats = prompt("How many cats do you want?");

    let howManyCatsNumber = Number(howManyCats);

    console.log("User asked for " + howManyCatsNumber)

   for (let i = 0; i < howManyCatsNumber; i++) {
        console.log("Running");

        let pizzaCatImage = document.createElement("img");

        pizzaCatImage.src = "pizza-cat.webp";

        document.body.appendChild(pizzaCatImage);
    }

  
}

let vibeCatButton = document.getElementById("vibe-cat-button");

vibeCatButton.addEventListener("click", vibeCatButtonClicked);

function vibeCatButtonClicked() {
    console.log("Hey vibe button clicked");

    let howManyCats = prompt("How many cats do you want?");

    let howManyCatsNumber = Number(howManyCats);

    console.log("User asked for " + howManyCatsNumber)

   for (let i = 0; i < howManyCatsNumber; i++) {
       console.log("Running");

       let vibeCatImage = document.createElement("img");

       vibeCatImage.src = "vibe-cat.gif";

       document.body.appendChild(vibeCatImage);
        }
}