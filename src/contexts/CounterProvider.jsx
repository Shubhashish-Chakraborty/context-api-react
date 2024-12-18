import React , {useState} from "react";

export const CounterContext = React.createContext();

export default function CounterProvider({ children }) {

    let [counter , setCounter] = useState(0);

    return(
        <>
            <CounterContext.Provider value={{
                counter: counter,
                setCounter: setCounter
            }}> 
                { children }
            </CounterContext.Provider>
        </>
    )
}