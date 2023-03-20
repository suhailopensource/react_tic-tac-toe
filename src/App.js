import { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App center">
      <Board></Board>
    </div>
  );
}

function Board() {
  const initialState = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [marks, setMarks] = useState(initialState);
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState("");
  const changeMark = (i) => {
    const m = [...marks];
    if (m[i] === 0) {
      m[i] = player;
      setMarks(m);
      setPlayer(player === 1 ? 2 : 1);
    } else {
      alert("click on empty box");
    }
  }
  const handleClick = () => {
    setMarks(initialState);
    setWinner("")
    setPlayer(1)
  }

  useEffect(() => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ]

    for (let c of combinations) {
      if (marks[c[0]] === 1 && marks[c[1]] === 1 && marks[c[2]] === 1) {
        setWinner("player X wins");
      }
      else if (marks[c[0]] === 2 && marks[c[1]] === 2 && marks[c[2]] === 2) {
        setWinner("player O wins");
      }
    }
  }, [marks])
  return (
    <div className="Board">
      <h3>TIC - TAC - TOE</h3>
      <div className="row jc-center">
        <Block className="b-bottom-right" mark={marks[0]} position={0} changeMarks={changeMark}></Block>
        <Block className="b-bottom b-right" mark={marks[1]} position={1} changeMarks={changeMark}></Block>
        <Block className="b-bottom" mark={marks[2]} position={2} changeMarks={changeMark}></Block>
      </div>
      <div className="row jc-center">
        <Block className="b-bottom-right" mark={marks[3]} position={3} changeMarks={changeMark}></Block>
        <Block className="b-bottom b-right" mark={marks[4]} position={4} changeMarks={changeMark}></Block>
        <Block className="b-bottom" mark={marks[5]} position={5} changeMarks={changeMark}></Block>
      </div>
      <div className="row jc-center">
        <Block className="b-right" mark={marks[6]} position={6} changeMarks={changeMark}></Block>
        <Block className=" b-right" mark={marks[7]} position={7} changeMarks={changeMark}></Block>
        <Block mark={marks[8]} position={8} changeMarks={changeMark}></Block>
      </div>
      <Winner winner={winner}></Winner>
      <button className="margin-left btn" onClick={handleClick}>Clear Game</button>
    </div>
  )
}
function Block({ mark, changeMarks, position, className }) {
  return (
    <div className={`block mark${mark} ${className}`} onClick={e => changeMarks(position)}></div>
  )
}
function Winner(props) {
  return (
    <div className="winner center">{props.winner}</div>
  )
}

export default App;
