import { useContext } from "react"; // Import useContext.
import { CounterContext } from "../contexts/CounterProvider.jsx";

export default function DecreaseButton() {
    const { counter , setCounter } = useContext(CounterContext);
    return(
        <>
            <button onClick={() => {
                setCounter(counter - 1)
            }}>Decrease</button>
        </>
    )
}