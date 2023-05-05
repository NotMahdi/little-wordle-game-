
import wordsSet from './wordSet.txt'; 


export const WordSetFn = async () =>{
    let wordSet;
    let correctRandomWord;
    await fetch(wordsSet).then((resp) =>
        resp.text()
    ).then((resp) =>{
        const wordSetArray = resp.split("\r\n")
        correctRandomWord = wordSetArray[Math.floor(Math.random() * wordSetArray.length)];
        wordSet = new Set(wordSetArray)
    })
    return {wordSet , correctRandomWord};
}