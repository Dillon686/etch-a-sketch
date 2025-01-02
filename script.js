const gameContainer = document.querySelector("#game-container");
const sizeButton = document.querySelector("#size-button");
const rainbowButton = document.querySelector("#rainbow-button");
const clearButton = document.querySelector("#clear-button");
let gridSize = 16;
const hexDigits = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

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
            if (cell.classList.contains("rainbow")){
                let color = "#";

                for (let i = 0; i < 6; i++){
                    let arrayIndex = Math.floor(Math.random() * hexDigits.length);
                    color += hexDigits[arrayIndex];
                }
                console.log(color);
                cell.style.backgroundColor = color;
            }else {
                cell.style.backgroundColor = "black";
            }
        })
        
    })

    rainbowButton.addEventListener("click", () => {
        gridCells.forEach((cell) => {
            if (cell.classList.contains("rainbow")){
                cell.classList.remove("rainbow");
            }else{
                cell.classList.add("rainbow");
            }
        })
    })

    clearButton.addEventListener("click", () => {
        gridCells.forEach((cell) => {
            cell.style.backgroundColor = "";
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
