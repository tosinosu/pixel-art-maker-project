
// Select size input
const cellHeight = document.getElementById('inputHeight');
const cellWidth = document.getElementById('inputWidth');

// Select color input
const color  = document.getElementById('colorPicker');

// Select button 
const sizePicker = document.getElementById("sizePicker");

// Select table position
const table = document.getElementById('pixelCanvas');


// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", function(event){
    event.preventDefault();
    makeGrid(cellHeight, cellWidth, color, table);
});
   
    
/**
 * Makes a colored grid based on inserted size and color.
 *
 * @param {number} height The height of the grid, based on inserted number.
 * @param {number} width The width of the grid, based on inserted number.
 * @param {number} color Fills the grid based on the collor selected.
 * @param {number} table Get the pixelCanvas from the index.html.
 */

function makeGrid(height, width, color, table) {
    // Select random colors from the array of colors provided
    let randomBorderArray = ["blue", "green" ,"yellow", "red", "black"];
    let randomBorderColor = randomBorderArray[Math.floor(Math.random() * randomBorderArray.length)];

    // Deletes the previous table when Makegrid is called 
    while (table.firstChild){
        table.removeChild(table.firstChild);
    }

    // Builds the grids using the inserted height and width
    for (let row  = 0; row < height.value; row++){
        let cellRow = table.insertRow(row);
    
        for(let col = 0; col < width.value; col++){
            let cellColumn = cellRow.insertCell(col);
            
            // Changes border color
            cellColumn.style.borderColor = randomBorderColor;

            // Adds selected colors to each selected cell
            cellColumn.addEventListener("click", function() {
                this.style.backgroundColor = color.value;
            });
        }
    };
}