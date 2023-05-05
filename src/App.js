import { createContext, useEffect, useState } from 'react';
import './App.css';
import Board from './components/board';
import BoardContext from './store/board-context';
import VirtualKeyBoard from './components/keyboard/virtualKeyBoard';
import {WordSetFn} from './wordsSet';
import GameOver from './components/gameOver';

export const AppContext = createContext();
function App() {
  const BoardDefault = [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']
]



const setBoardState = () =>{
  const newBoard = [...board];
  setBoard(newBoard);
}

  const [board, setBoard] = useState(BoardDefault);
  const [current, setCurrent] = useState({row:0 , column:0});
  const [playerTurn, setPlayerTurn] = useState(true);
  const [wordDataSet, setWordDataSet] = useState(new Set());
  const [unCorrectLetters , setunCorrectLetters] = useState([]);
  const [gameOver, setGameOver] = useState({gameOver: false , playerWon: false});
  const [correctWord , setCorrectWord] = useState('');

//const correctWord = "RIGHT"

  useEffect(()=>{
    WordSetFn().then((rslt) =>{
      console.log(rslt.correctWord1)
      setWordDataSet(rslt.wordSet);
      setCorrectWord(rslt.correctRandomWord);
    })
  },[]);


  return (
    <div className="App">
      <BoardContext.Provider value={{
        board:board,
        setBoard: setBoardState,
        current: current,
        setCurrent: setCurrent
      }}>
        <AppContext.Provider value={{
          current,
          setCurrent,
          playerTurn,
          setPlayerTurn,
          correctWord,
          wordDataSet,
          unCorrectLetters,
          setunCorrectLetters,
          gameOver,
          setGameOver
         // setCorrectWord
        }}>
      <Board/>  
      {gameOver.gameOver? <GameOver/> : <VirtualKeyBoard/>}
      </AppContext.Provider>
      </BoardContext.Provider>
    </div>
  );
}

export default App;