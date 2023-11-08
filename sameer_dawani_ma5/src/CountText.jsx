import React, { useContext } from "react";
import {CountContext} from "./CountProvider";
import  './App.css';

function CountText(){
  
    const {count} = useContext(CountContext);
    return (
        <h1>Count: {count}</h1>
    )
}

export default CountText