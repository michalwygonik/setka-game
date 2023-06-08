import { useState } from "react";

const Tile = (props) => {
  const { actuallNumber, setActuallNumber, id, startGame, setStartGame } =
    props;

  const [hittedNumber, setHittedNumber] = useState(false);

  const handleTileClick = (e) => {
    const clickedNumber = Number(e.target.id);

    if (clickedNumber - 1 === actuallNumber) {
      setActuallNumber(actuallNumber + 1);
      setHittedNumber(true);
    }

    if (actuallNumber === 99) {
      setStartGame(!startGame);
    }
    console.log(actuallNumber);
  };

  const hitted = { opacity: 0, cursor: "default" };
  return (
    <div
      className="tile"
      onClick={handleTileClick}
      id={id}
      style={hittedNumber ? hitted : null}
    >
      {id}
    </div>
  );
};

export default Tile;
