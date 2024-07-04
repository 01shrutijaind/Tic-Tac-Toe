let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleClick(index) {
  if (gameActive && board[index] === '') {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    checkResult();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkResult() {
  for (let condition of winningConditions) {
    let [a, b, c] = condition;
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      gameActive = false;
      document.getElementById('message').innerText = `${currentPlayer} wins!`;
      return;
    }
  }
  if (!board.includes('')) {
    gameActive = false;
    document.getElementById('message').innerText = "It's a draw!";
  }
}

function resetGame() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  document.getElementById('message').innerText = '';
  let cells = document.getElementsByClassName('cell');
  for (let cell of cells) {
    cell.innerText = '';
  }
}