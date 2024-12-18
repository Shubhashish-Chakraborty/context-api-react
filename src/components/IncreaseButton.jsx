import { useContext } from "react"; // Import useContext.
import { CounterContext } from "../contexts/CounterProvider.jsx";

export default function IncreaseButton() {
    const { setCounter } = useContext(CounterContext);
    return(
        <>
            <button onClick={() => {
                setCounter(currentCounter => currentCounter + 1)
            }}>Increase</button>
        </>
    )
}