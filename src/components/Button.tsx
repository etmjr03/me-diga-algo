import { useState } from "react";

export function Buttontest() {
    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1)
    }

    return (
        <button onClick={increment}>
            {counter}
        </button>
    )
}

// type ButtonProps = {
//     children?: string;
// }