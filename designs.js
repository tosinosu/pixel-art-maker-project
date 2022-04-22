// Select color input and parameters


const cellHeight = document.getElementById('inputHeight');
const cellWidth = document.getElementById('inputWidth');
const color  = document.getElementById('colorPicker');
const sizePicker = document.getElementById("sizePicker");
const table = document.getElementById('pixelCanvas');


//submit button is clicked
sizePicker.addEventListener("submit", function(event){
    event.preventDefault();
    makeGrid(cellHeight, cellWidth, color, table);
});
   
    
// When size is submitted by the user, call makeGrid()
function makeGrid(height, width, color, table) {

    let randomBorderArray = ["blue", "green" ,"yellow", "red", "black"];
    let randomBorderColor = randomBorderArray[Math.floor(Math.random() * randomBorderArray.length)];

    while (table.firstChild){
        table.removeChild(table.firstChild);
    }

    for (let row  = 0; row < width.value; row++){
        let cellRow = table.insertRow(row);
        for(let col = 0; col < height.value; col++){
            let cellColumn = cellRow.insertCell(col);

            cellColumn.style.border = '1px solid '+ randomBorderColor;

            cellColumn.addEventListener("click", function() {
                this.style.backgroundColor = color.value;
            });
        }
    }
}