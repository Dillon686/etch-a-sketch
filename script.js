const gameContainer = document.querySelector("#game-container");

for (let i = 0; i < 16; i++){
    let row = document.createElement("div");

    for (let j = 0; j < 16; j++){
        let cell = document.createElement("div");
        row.appendChild(cell);
    }

    gameContainer.appendChild(row)
}