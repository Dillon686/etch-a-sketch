const gameContainer = document.querySelector("#game-container");
const sizeButton = document.querySelector("#size-button");
let gridSize = 16;

drawGrid(gridSize);

function drawGrid(gridSize){
    gameContainer.textContent = "";

    for (let i = 0; i < gridSize; i++){
        let row = document.createElement("div");
    
        for (let j = 0; j < gridSize; j++){
            let cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
    
        gameContainer.appendChild(row)
    }

    let gridCells = document.querySelectorAll(".cell");

    gridCells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
    })
})
}

sizeButton.addEventListener("click", () => {
    gridSize = prompt("Please select a grid size (value must be between 2-100):")

    while (gridSize <= 1 || gridSize > 100){
        gridSize = prompt("Please select a grid size (value must be between 2-100):")
    }

    drawGrid(gridSize);
})
