let one;
let two;
let three;
let four;
let five;
let six;
let seven;
let eight;
let nine;
let comp;
let wins = 0;
let loses = 0;

function compPress() {
    comp = Math.random();
    if (comp < 0.12) {
        if (one == 1 || one == 0) {
            compPress();
        } else {
            one = 0;
            document.getElementById('topLeft').textContent = '0';
        }
    } else if (comp < 0.23) {
        if (two == 1 || two == 0) {
            compPress();
        } else {
            two = 0;
            document.getElementById('topCenter').textContent = '0';
        }
    } else if (comp < 0.34) {
        if (three == 1 || three == 0) {
            compPress();
        } else {
            three = 0;
            document.getElementById('topRight').textContent = '0';
        }
    } else if (comp < 0.45) {
        if (four == 1 || four == 0) {
            compPress();
        } else {
            four = 0;
            document.getElementById('middleLeft').textContent = '0';
        }
    } else if (comp < 0.56) {
        if (five == 1 || five == 0) {
            compPress();
        } else {
            five = 0;
            document.getElementById('middleCenter').textContent = '0';
        }
    } else if (comp < 0.67) {
        if (six == 1 || six == 0) {
            compPress();
        } else {
            six = 0;
            document.getElementById('middleRight').textContent = '0';
        }
    } else if (comp < 0.78) {
        if (seven == 1 || seven == 0) {
            compPress();
        } else {
            seven = 0;
            document.getElementById('lowerLeft').textContent = '0';
        }
    } else if (comp < 0.89) {
        if (eight == 1 || eight == 0) {
            compPress();
        } else {
            eight = 0;
            document.getElementById('lowerCenter').textContent = '0';
        }
    } else if (comp < 1) {
        if (nine == 1 || nine == 0) {
            compPress();
        } else {
            nine = 0;
            document.getElementById('lowerRight').textContent = '0';
        }
    }
}

function pressTopLeft() {
    let TL;
    document.getElementById('topLeft').textContent = 'X';
    one = 1;
    compPress();
    gameOver();
}

function pressTopCenter() {
    let TC;
    document.getElementById('topCenter').textContent = 'X';
    two = 1;
    compPress();
    gameOver();
}

function pressTopRight() {
    let TC;
    document.getElementById('topRight').textContent = 'X';
    three = 1;
    compPress();
    gameOver();
}

function pressMiddleLeft() {
    let TC;
    document.getElementById('middleLeft').textContent = 'X';
    four = 1;
    compPress();
    gameOver();
}

function pressMiddleCenter() {
    let TC;
    document.getElementById('middleCenter').textContent = 'X';
    five = 1;
    compPress();
    gameOver();
}

function pressMiddleRight() {
    let TC;
    document.getElementById('middleRight').textContent = 'X';
    six = 1;
    compPress();
    gameOver();
}

function pressLowerleft() {
    let TC;
    document.getElementById('lowerLeft').textContent = 'X';
    seven = 1;
    compPress();
    gameOver();
}

function pressLowerCenter() {
    let TC;
    document.getElementById('lowerCenter').textContent = 'X';
    eight = 1;
    compPress();
    gameOver();
}

function pressLowerRight() {
    let TC;
    document.getElementById('lowerRight').textContent = 'X';
    nine = 1;
    compPress();
    gameOver();
}

function gameOver() {
    if (one == 1 & two == 1 & three == 1) {
        alert('Вы победили');
        wins = wins + 1;
        document.getElementById('wins').textContent = wins;
    } else if (one == 0 & two == 0 & three == 0) {
        alert('Вы проиграли')
        loses = loses + 1;
        document.getElementById('loses').textContent = loses;
    } else if (one == 0 & five == 0 & nine == 0) {
        alert('Вы проиграли')
        loses = loses + 1;
        document.getElementById('loses').textContent = loses;
    } else if (one == 1 & five == 1 & nine == 1) {
        alert('Вы победили')
        wins = wins + 1;
        document.getElementById('wins').textContent = wins;
    } else if (one == 1 & four == 1 & seven == 1) {
        alert('Вы победили');
        wins = wins + 1;
        document.getElementById('wins').textContent = wins;
    } else if (two == 1 & five == 1 & eight == 1) {
        alert('Вы победили')
        wins = wins + 1;
        document.getElementById('wins').textContent = wins;
    } else if (three == 1 & six == 1 & nine == 1) {
        alert('Вы победили')
        wins = wins + 1;
        document.getElementById('wins').textContent = wins;
    } else if (four == 1 & five == 1 & six == 1) {
        alert('Вы победили')
        wins = wins + 1;
        document.getElementById('wins').textContent = wins;
    } else if (three == 1 & five == 1 & seven == 1) {
        alert('Вы победили')
        wins = wins + 1;
        document.getElementById('wins').textContent = wins;
    } else if (seven == 1 & eight == 1 & nine == 1) {
        alert('Вы победили')
        wins = wins + 1;
        document.getElementById('wins').textContent = wins;
    } else if (one == 0 & four == 0 & seven == 0) {
        alert('Вы проиграли')
        loses = loses + 1;
        document.getElementById('loses').textContent = loses;
    } else if (two == 0 & five == 0 & eight == 0) {
        alert('Вы проиграли')
        loses = loses + 1;
        document.getElementById('loses').textContent = loses;
    } else if (three == 0 & six == 0 & nine == 0) {
        alert('Вы проиграли')
        loses = loses + 1;
        document.getElementById('loses').textContent = loses;
    } else if (four == 0 & five == 0 & six == 0) {
        alert('Вы проиграли')
        loses = loses + 1;
        document.getElementById('loses').textContent = loses;
    } else if (three == 0 & five == 0 & seven == 0) {
        alert('Вы проиграли')
        loses = loses + 1;
        document.getElementById('loses').textContent = loses;
    } else if (seven == 0 & eight == 0 & nine == 0) {
        alert('Вы проиграли')
        loses = loses + 1;
        document.getElementById('loses').textContent = loses;
    }
}