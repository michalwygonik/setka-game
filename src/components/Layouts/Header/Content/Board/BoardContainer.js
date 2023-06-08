import Board from "./Board";
import Timer from "./Timer/Timer";

const BoardContainer = (props) => {
  return (
    <div className="board-container">
      <Board startGame={props.startGame} setStartGame={props.setStartGame} />
      <Timer
        startGame={props.startGame}
        timer={props.timer}
        setTimer={props.setTimer}
      />
    </div>
  );
};

export default BoardContainer;
