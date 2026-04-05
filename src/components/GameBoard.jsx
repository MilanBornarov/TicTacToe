export default function GameBoard({ onSelectedSquare, board }) {
  /*
    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    function updateGameBoard(rowIndex, colIndex){
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]  // Deep copy of prevGameBoard
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol                                     // Because it's an array of arrays we do this.
            return updatedBoard
        })

        onSelectedSquare()
    }
*/
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectedSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
