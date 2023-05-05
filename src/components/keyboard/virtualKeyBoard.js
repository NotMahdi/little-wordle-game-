import React, { useContext } from "react";
import LetterKeys from "./letterKeys";
import styles from "./virtualKeys.module.css";
import { AppContext } from "../../App";
const VirtualKeyBoad = ()=>{
    const line1= ['Q','W','E','R','T','Y','U','I','O','P'];
    const line2= ['A','S','D','F','G','H','J','K','L'];
    const line3= ['Z','X','C','V','B','N','M'];
    const {unCorrectLetters} = useContext(AppContext);
    return(
        <div className={styles.keyboard}>
            <div className={styles.line1}>

                {line1.map((letter)=>{
                    return (<LetterKeys key={letter} letter={letter} disabled={unCorrectLetters.includes(letter)}/>)
                })}
            </div>

            <div className={styles.line2}>
                {line2.map((letter)=>{
                    return (<LetterKeys key={letter} letter={letter} disabled={unCorrectLetters.includes(letter)}/>)
                })}
            </div>

            <div className={styles.line3}>
                <LetterKeys key={'ENTER'} big letter={'ENTER'}/>
                {line3.map((letter)=>{
                    return (<LetterKeys key={letter} letter={letter} disabled={unCorrectLetters.includes(letter)}/>)
                })}
                <LetterKeys key={'DELETE'} big letter={'DELETE'}/>
            </div>
        </div>
    )
}

export default VirtualKeyBoad;