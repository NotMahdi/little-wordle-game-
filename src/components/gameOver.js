import React, { useContext } from "react";
import { AppContext } from "../App";

const GameOver = () =>{
    const {gameOver,correctWord} = useContext(AppContext);
    return(
        <div className="gameOver">
            <h3>{gameOver.playerWon? "you guessed the correct word, congradulations":"You have failed to guess the correct word"}</h3>
            <h1>Correct Word: {correctWord}</h1>
        </div>
    )
}

export default GameOver;