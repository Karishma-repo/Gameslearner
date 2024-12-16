export default function Square({value , onSquareClick}) {
    return (
    <button className={`square ${value ? value.toLowerCase() : ''}`} onClick={onSquareClick}>
      {value}
    </button>
    );
  }