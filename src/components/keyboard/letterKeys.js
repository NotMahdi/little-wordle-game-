import React, { useContext } from "react";
import BoardContext from "../../store/board-context";
import styles from './letterKeys.module.css';
import { AppContext } from "../../App";

const LetterKeys =(props) =>{
    const boardCtx = useContext(BoardContext);
    const {current, setCurrent , playerTurn , setPlayerTurn , wordDataSet, correctWord, setGameOver} = useContext(AppContext);


    const setLetterKeys = ()=>{
        if(props.letter === 'ENTER'){
            if(current.row !== 5) return;
            let formedWord = ""
            for(let i=0; i<5 ;i++ ){
                formedWord += boardCtx.board[current.column][i];
            }
            if(wordDataSet.has(formedWord)){ 
            setCurrent({row: 0,column: current.column+1})
            }
            else alert('try again');

            if(formedWord === correctWord){
                setGameOver({gameOver: true, playerWon: true});
            }

            if(current.column === 5){
                setGameOver({gameOver: true, playerWon: false});
            }

            if(playerTurn) return;
            else setPlayerTurn(false);


        }else if(props.letter ==='DELETE')
        {
            if(current.row === 0) return;
            const newBoard = [...boardCtx.board];
            newBoard[current.column][current.row-1] = "";
            boardCtx.setBoard(newBoard);
            setCurrent({...current, row: current.row-1});
        }


        else{
        if(current.row >4) return;
        const newBoard = [...boardCtx.board];
        newBoard[current.column][current.row] = props.letter;
        boardCtx.setBoard(newBoard);
        setCurrent({...current , row: current.row+1});}
    }
        

    return(
        <div id={props.big ? styles.big: props.disabled && styles.disabled} className={styles.key} onClick={setLetterKeys}>
            {props.letter}
        </div>
    )
}

export default LetterKeys;