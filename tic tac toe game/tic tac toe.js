let field = {
    one: 2,
    two: 2,
    three: 2,
    foue: 2,
    five: 2,
    six: 2,
    seven: 2,
    eight: 2,
    nine: 2
}

let comp;
let wins = JSON.parse(localStorage.getItem('wins')) || 0;
let loses = JSON.parse(localStorage.getItem('loses')) || 0

function displayScore() {
    document.getElementById('wins').textContent = 'Побед: ' + wins + ' : ' + loses + ' Поражений'
}

displayScore();

function compPress() {
    comp = Math.random();
    if (comp < 0.12) {
        if (field.one == 1 || field.one == 0) {
            compPress();
        } else {
            field.one = 0;
            document.getElementById('topLeft').textContent = '0';
        }
    } else if (comp < 0.23) {
        if (field.two == 1 || field.two == 0) {
            compPress();
        } else {
            field.two = 0;
            document.getElementById('topCenter').textContent = '0';
        }
    } else if (comp < 0.34) {
        if (field.three == 1 || field.three == 0) {
            compPress();
        } else {
            field.three = 0;
            document.getElementById('topRight').textContent = '0';
        }
    } else if (comp < 0.45) {
        if (field.four == 1 || field.four == 0) {
            compPress();
        } else {
            field.four = 0;
            document.getElementById('middleLeft').textContent = '0';
        }
    } else if (comp < 0.56) {
        if (field.five == 1 || field.five == 0) {
            compPress();
        } else {
            field.five = 0;
            document.getElementById('middleCenter').textContent = '0';
        }
    } else if (comp < 0.67) {
        if (field.six == 1 || field.six == 0) {
            compPress();
        } else {
            field.six = 0;
            document.getElementById('middleRight').textContent = '0';
        }
    } else if (comp < 0.78) {
        if (field.seven == 1 || field.seven == 0) {
            compPress();
        } else {
            field.seven = 0;
            document.getElementById('lowerLeft').textContent = '0';
        }
    } else if (comp < 0.89) {
        if (field.eight == 1 || field.eight == 0) {
            compPress();
        } else {
            field.eight = 0;
            document.getElementById('lowerCenter').textContent = '0';
        }
    } else if (comp < 1) {
        if (field.nine == 1 || field.nine == 0) {
            compPress();
        } else {
            field.nine = 0;
            document.getElementById('lowerRight').textContent = '0';
        }
    }
}

function pressTopLeft() {
    document.getElementById('topLeft').textContent = 'X';
    field.one = 1;
    compPress();
    gameOver();
}

function pressTopCenter() {
    document.getElementById('topCenter').textContent = 'X';
    field.two = 1;
    compPress();
    gameOver();
}

function pressTopRight() {
    document.getElementById('topRight').textContent = 'X';
    field.three = 1;
    compPress();
    gameOver();
}

function pressMiddleLeft() {
    document.getElementById('middleLeft').textContent = 'X';
    field.four = 1;
    compPress();
    gameOver();
}

function pressMiddleCenter() {
    document.getElementById('middleCenter').textContent = 'X';
    field.five = 1;
    compPress();
    gameOver();
}

function pressMiddleRight() {
    document.getElementById('middleRight').textContent = 'X';
    field.six = 1;
    compPress();
    gameOver();
}

function pressLowerleft() {
    document.getElementById('lowerLeft').textContent = 'X';
    field.seven = 1;
    compPress();
    gameOver();
}

function pressLowerCenter() {
    document.getElementById('lowerCenter').textContent = 'X';
    field.eight = 1;
    compPress();
    gameOver();
}

function pressLowerRight() {
    document.getElementById('lowerRight').textContent = 'X';
    field.nine = 1;
    compPress();
    gameOver();
}

function gameOver() {
    if (field.one == 1 & field.two == 1 & field.three == 1) {
        alert('Вы победили');
        wins++;
        console.log(wins);
        localStorage.setItem('wins', JSON.stringify(wins));
        displayScore()
    } else if (field.one == 0 & field.two == 0 & field.three == 0) {
        alert('Вы проиграли')
        loses++;
        console.log(loses);
        localStorage.setItem('loses', JSON.stringify(loses));
        displayScore()
    } else if (field.one == 0 & field.five == 0 & field.nine == 0) {
        alert('Вы проиграли');
        loses++;
        console.log(loses);
        localStorage.setItem('loses', JSON.stringify(loses));
        displayScore()
    } else if (field.one == 1 & field.five == 1 & field.nine == 1) {
        alert('Вы победили');
        wins++;
        console.log(wins);
        localStorage.setItem('wins', JSON.stringify(wins));
        displayScore()
    } else if (field.one == 1 & field.four == 1 & field.seven == 1) {
        alert('Вы победили');
        wins++;
        console.log(wins);
        localStorage.setItem('wins', JSON.stringify(wins));
        displayScore()
    } else if (field.two == 1 & field.five == 1 & field.eight == 1) {
        alert('Вы победили');
        wins++;
        console.log(wins);
        localStorage.setItem('wins', JSON.stringify(wins));
        displayScore()
    } else if (field.three == 1 & field.six == 1 & field.nine == 1) {
        alert('Вы победили');
        wins++;
        console.log(wins);
        localStorage.setItem('wins', JSON.stringify(wins));
        displayScore()
    } else if (field.four == 1 & field.five == 1 & field.six == 1) {
        alert('Вы победили');
        wins++;
        console.log(wins);
        localStorage.setItem('wins', JSON.stringify(wins));
        displayScore()
    } else if (field.three == 1 & field.five == 1 & field.seven == 1) {
        alert('Вы победили');
        wins++;
        console.log(wins);
        localStorage.setItem('wins', JSON.stringify(wins));
        displayScore()
    } else if (field.seven == 1 & field.eight == 1 & field.nine == 1) {
        alert('Вы победили');
        wins++;
        console.log(wins);
        localStorage.setItem('wins', JSON.stringify(wins));
        displayScore()
    } else if (field.one == 0 & field.four == 0 & field.seven == 0) {
        alert('Вы проиграли');
        loses++;
        console.log(loses);
        localStorage.setItem('loses', JSON.stringify(loses));
        displayScore()
    } else if (field.two == 0 & field.five == 0 & field.eight == 0) {
        alert('Вы проиграли');
        loses++;
        console.log(loses);
        localStorage.setItem('loses', JSON.stringify(loses));
        displayScore()
    } else if (field.three == 0 & field.six == 0 & field.nine == 0) {
        alert('Вы проиграли');
        loses++;
        console.log(loses);
        localStorage.setItem('loses', JSON.stringify(loses));
        displayScore()
    } else if (field.four == 0 & field.five == 0 & field.six == 0) {
        alert('Вы проиграли');
        loses++;
        console.log(loses);
        localStorage.setItem('loses', JSON.stringify(loses));
        displayScore()
    } else if (field.three == 0 & field.five == 0 & field.seven == 0) {
        alert('Вы проиграли');
        loses++;
        console.log(loses);
        localStorage.setItem('loses', JSON.stringify(loses));
        displayScore()
    } else if (field.seven == 0 & field.eight == 0 & field.nine == 0) {
        alert('Вы проиграли');
        loses++;
        console.log(loses);
        localStorage.setItem('loses', JSON.stringify(loses));
        displayScore()
    }
}