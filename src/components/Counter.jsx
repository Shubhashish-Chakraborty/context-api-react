import { useState } from "react";
import DecreaseButton from "./DecreaseButton.jsx";
import IncreaseButton from "./IncreaseButton.jsx";
import CounterDisplay from "./CounterDisplay.jsx";

import CounterProvider from "../contexts/CounterProvider.jsx"

export default function Counter() {
    return (
        <>
            <CounterProvider>
                <CounterDisplay/>
                <DecreaseButton/>
                <IncreaseButton/>
            </CounterProvider>
        </>
    )
}