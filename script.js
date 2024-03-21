document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");
    const message = document.getElementById("message");
    const button = document.getElementById("button");
    let currentPlayer = "X";
    let moves = 0;
    let board = ["", "", "", "", "", "", "", "", ""];

    function handleClick(index) {
        if (board[index] === "") {
            board[index] = currentPlayer;
            moves++;
            render();
            if (checkWinner(currentPlayer)) {
                message.textContent = `'${currentPlayer}' won the game!`;
                showResult();
            } else if (moves === 9) {
                message.textContent = "It's a draw!";
                showResult();
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    }

    
    function checkWinner(player) {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        return winningCombos.some((combo) => {
            return combo.every((index) => {
                return board[index] === player;
            });
        });
    }

    
    function render() {
        board.forEach((value, index) => {
            boxes[index].textContent = value;
        });
    }

    
    function showResult() {
        document.getElementById("result").style.visibility = "visible";
    }

    
    boxes.forEach((box, index) => {
        box.addEventListener("click", function () {
            handleClick(index);
        });
    });

    
    button.addEventListener("click", function () {
        board = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";
        moves = 0;
        render();
        message.textContent = "";
        document.getElementById("result").style.visibility = "hidden";
    });
});
