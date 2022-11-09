let rows = document.querySelector("tbody").children
let matrix = []
for (var i = 0; i < rows.length; i++) {
    matrix.push(rows[i].children)
}
function paintAll() { 
    erase();
    for (let i = 0; i < 6; i++) { // afegir codi
        for (let j = 0; j < 5; j++) { // afegir codi
            matrix[i][j].style.backgroundColor = "red";
        }
    }
}

function erase() {
    for (let i = 0; i < 6; i++) { // afegir codi
        for (let j = 0; j < 5; j++) { // afegir codi
            matrix[i][j].style.backgroundColor = "white";
        }
    }
}

function paintRightHalf() {
    erase();
    for (let i = 0; i < 6; i++) { // afegir codi
        for (let j = 3; j < 5; j++) { // afegir codi
            matrix[i][j].style.backgroundColor = "red";
        }
    }
}

function paintLeftHalf() {
    erase();

    for (let i = 0; i < 6; i++) { // afegir codi
        for (let j = 0; j < 3; j++) { // afegir codi
            matrix[i][j].style.backgroundColor = "red";
        }
    }

}

function paintUpperHalf() {
    erase();

    for (let i = 0; i < 3; i++) { // afegir codi
        for (let j = 0; j < 5; j++) { // afegir codi
            matrix[i][j].style.backgroundColor = "red";
        }
    }

}

function paintLowerTriangle() {
    erase();

    for (let i = 1; i <= 6; i++) { // afegir codi
        for (let j = 0; j < i; j++) { // afegir codi
            matrix[i][j].style.backgroundColor = "red";
        }
    }

}

function paintUpperTriangle() {
    erase();
    for (let i = 6; i => 0; i--) { // afegir codi
        for (let j = 4; j > i-1; j--) { // afegir codi
            matrix[i][j].style.backgroundColor = "red";
        }
    } 
}

//------------------------------------------------------------------------------

function paintPerimeter() {
    erase();
    for (let i = 0; i <= 6; i++) { // afegir codi  
            for (let j = 0; j < 5; j++) { // afegir codi
                if ((i == 0 || i == 5) || (j == 0 || j == 4)) {
                    matrix[i][j].style.backgroundColor = "red";
                }
            }
        
    }
}

function paintCheckerboard() {
    erase();
    for (let i = 0; i < 6; i++) { // afegir codi 
        for (let j = 0; j < 5; j++) { // afegir codi
            if ((i+j) % 2 == 0) {
                matrix[i][j].style.backgroundColor = "red"; 
            }
        }
    }
}

function paintCheckerboard2() {
    erase();
    for (let i = 0; i < 6; i++) { // afegir codi 
        for (let j = 0; j < 5; j++) { // afegir codi
            if ((i+j) % 2 != 0) {
                matrix[i][j].style.backgroundColor = "red"; 
            }
        }
    }
}
