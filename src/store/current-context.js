import React from "react";

const CurrentContext =  React.createContext({
    current:{},
    setCurrent: ()=>{}
});

export default CurrentContext;