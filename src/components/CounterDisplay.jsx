import { useContext } from "react"
import { CounterContext } from "../contexts/CounterProvider.jsx"

export default function CounterDisplay() {
    const { counter } = useContext(CounterContext);
    return(
        <>
            <h2>Counter: {counter}</h2>
        </>
    )
}