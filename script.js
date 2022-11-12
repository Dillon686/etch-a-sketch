const game = document.getElementById("game");
const resetButton = document.getElementById("reset");
const updateButton = document.getElementById("update");

updateButton.addEventListener("click", () => {
    game.innerHTML = ""
    const sideDimension = prompt("Please enter a dimension (ex. enter 16 for a 16x16 grid):")
    generateGrid(sideDimension);
})

function generateGrid(sideDimension = 64){
    for(let i = 0; i < sideDimension; i++){
        const row = document.createElement("div");
        row.classList.add("game-row");
        game.appendChild(row);
        for(let x = 0; x < sideDimension; x++){
            const cell = document.createElement("div");
            cell.classList.add("game-cell")
            row.appendChild(cell);

            cell.addEventListener("mouseover", () => {
                cell.classList.add("change-black");
            })

            resetButton.addEventListener("click", () => {
                cell.classList.remove("change-black");
            })
        }
    }
}

generateGrid();
