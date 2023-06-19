


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }



let MainGrid = document.querySelector(".MainGrid");
let GridCell = document.querySelector(".arcticle");





for (let i = 0; i <69; i++){

    MainGrid.appendChild(GridCell.cloneNode(true));

}


let CardImgAll = document.querySelectorAll(".CardImg");
let GridCellAll = document.querySelectorAll(".arcticle");

for (let i = 0; i < 70; i++){

let value = getRandomInt(1,5);

    if (value == 1) {
        GridCellAll[i].style.gridColumn = 'span 1'
        CardImgAll[i].src = "images/cat1.jpg"

    }
    if (value == 2) {
        GridCellAll[i].style.gridColumn = 'span 2'
        CardImgAll[i].src = "images/cat2.jpg"

    }
    if (value == 3) {
        GridCellAll[i].style.gridColumn = 'span 3'
        CardImgAll[i].src = "images/cat3.jpg"

    }
    if (value == 4) {
        GridCellAll[i].style.gridColumn = 'span 1'
        CardImgAll[i].src = "images/cat4.jpg"

    }
    if (value == 5) {
        GridCellAll[i].style.gridColumn = 'span 2'
        CardImgAll[i].src = "images/cat2.jpg"

    }


}