import React from "react";

const BoardContext =  React.createContext({
    board:'',
    setBoard: ()=>{}
});

export default BoardContext;