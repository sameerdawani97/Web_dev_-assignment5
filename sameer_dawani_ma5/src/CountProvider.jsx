import { createContext, useState } from "react";
export const CountContext = createContext();

function CountProvider(props){

    const [count, setCount] = useState(0);
    const [switchState, setSwitchState] = useState([[false, false],[false,false]]);
    const [classArray, setClassArray] = useState([['box', 'box'],['box','box']]);

    return (
        <CountContext.Provider value = {{count, setCount, switchState, setSwitchState, classArray, setClassArray}}>
            {props.children}
        </CountContext.Provider>
    )
}

export default CountProvider