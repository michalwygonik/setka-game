import Tile from "./Tile";
import { useState, useEffect } from "react";

function shuffle(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const Board = (props) => {
  const [tilesArray, setTilesArray] = useState([]);
  const [actuallNumber, setActuallNumber] = useState(0);

  useEffect(() => {
    const newTilesArray = [];
    for (let i = 1; i <= 100; i++) {
      newTilesArray.push(i.toString().padStart(2, "0"));
    }
    const shuffledTilesArray = shuffle(newTilesArray);
    setTilesArray(shuffledTilesArray);
  }, []);

  const tiles = tilesArray.map((tile) => (
    <Tile
      id={tile}
      key={tile}
      actuallNumber={actuallNumber}
      setActuallNumber={setActuallNumber}
      startGame={props.startGame}
      setStartGame={props.setStartGame}
    />
  ));

  return (
    <>
      <div className="board">{tiles}</div>
      <span className="numberLookingFor">
        Aktualnie szukana liczba to <i>{actuallNumber + 1}</i>
      </span>
    </>
  );
};

export default Board;
