const game = document.getElementById("game");

function generateGrid(sideDimension = 16){
    for(let i = 0; i < sideDimension; i++){
        const row = document.createElement("div");
        row.classList.add("game-row");
        game.appendChild(row);
        for(let x = 0; x < sideDimension; x++){
            const cell = document.createElement("div");
            cell.classList.add("game-cell")
            row.appendChild(cell);
        }
    }
}


generateGrid();