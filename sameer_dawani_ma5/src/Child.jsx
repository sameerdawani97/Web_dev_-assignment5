import React, { useContext } from "react";
import {CountContext} from "./CountProvider";
import  './App.css'

function Child(props){
    const {count, setCount, switchState, setSwitchState, classArray, setClassArray, boxLoc, setBoxLoc} = useContext(CountContext);

    function setCountState(incrementValue){
        setCount(count + incrementValue);
    }

    // function to toggle the state of box, if it is on make it off, otherwise on.
    function toggleState(row, col){
        let curSwitchState = [...switchState];
        let curClassArray = [...classArray];
        if (curSwitchState[row][col]){
            curClassArray[row][col] = 'box';
            setCountState(-1);
        }
        else{
            curClassArray[row][col] = 'box on';
            setCountState(1);
        }
        curSwitchState[row][col] = !switchState[row][col];
        setSwitchState(curSwitchState);
        setClassArray(curClassArray);
    }

    const row = props.row;
    const col = props.col;
    return (
        <div className={classArray[row][col]} onClick={() => toggleState(row, col)}></div>
    )
}

export default Child