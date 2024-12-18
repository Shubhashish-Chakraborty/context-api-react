import { useContext } from "react"; // Import useContext.
import { CounterContext } from "../contexts/CounterProvider.jsx";

export default function IncreaseButton() {
    const { counter , setCounter } = useContext(CounterContext);
    return(
        <>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>Increase</button>
        </>
    )
}