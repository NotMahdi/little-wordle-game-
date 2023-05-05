import React, {useContext, useEffect} from "react";
import BoardContext from "../store/board-context";
import { AppContext } from "../App";


const Letter = ({letterPos, attemptVal}) => {
    const {board} = useContext(BoardContext);
    const {correctWord, current, setunCorrectLetters} = useContext(AppContext)
    const letter = board[attemptVal][letterPos];
    //const letter = board[letterPos]

    const correct = correctWord[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
  current.column > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");
    //current.column > attemptVal && (correct?"correct":almost?"almost":"error")

    useEffect(()=>{
      if(!correct && !almost && letter !== "")
      setunCorrectLetters((prevState) => [...prevState ,letter]);
    }, [current.column])
    
    return(
        <div  className="letter" id={letterState}>{letter}</div>
    )
}

export default Letter;