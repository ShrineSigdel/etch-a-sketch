//Project: Etch-a-sketch

//initializations and querySelectors.
let gridNumber = 16;
const clear = document.querySelector('.clear');
const grid = document.querySelector('.grid');
const apply = document.querySelector('.apply');
createGrid();

//creating the grid.
function createGrid() {
    for (let i = 1; i <= gridNumber; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        for (let j = 1; j <= gridNumber; j++) {
            let column = document.createElement('div');
            column.setAttribute("style", `width: ${39 / gridNumber}em; height: ${39 / gridNumber}em;`)
            column.classList.add('column');
            row.appendChild(column);
        }
    }
    coloringPixels();
}
//changing the grid 
apply.addEventListener('click', () => {
    const slider = document.querySelector('.slider');
    gridNumber = slider.value;
    console.log(gridNumber);
    removeGrid(grid);
    createGrid();
});
//removing the old grid after grid change request by the user
function removeGrid(grid) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}
//for clearing grid with power button
clear.addEventListener('click', clearAll);
function clearAll() {
    const columns = document.querySelectorAll('.column');
    columns.forEach((column) => {
        column.style.backgroundColor = "white";
    });
}


//coloring action
function coloringPixels() {
    const pixels = document.querySelectorAll('.column');
    i = 0;
    pixels.forEach((box) => box.addEventListener('mouseover', (box) => {
        box.currentTarget.classList.add(`hover${i}`);
        setColor();
        i++;
    }));
}
function setColor() {
    let hover = document.querySelector(`.hover${i}`);
    hover.style.backgroundColor = `rgb(${random()},${random()},${random()})`; //for random color
}
function random() {
    return Math.floor(Math.random() * 255); //for sending random  rgb values to random
}


