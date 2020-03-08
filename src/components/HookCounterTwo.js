import React, { useState } from "react"

function HookCounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementFive = () => {
        console.log("count" , count);
        setCount(prevCount => prevCount+5);
        console.log("Last count" , count);
        
    }

    return (
        <div>
            Count: {count}
            <button onClick={() =>setCount(initialCount)}>Reset</button>
            <button onClick={() =>setCount(prevCount => prevCount+1)}>Increment</button>
            <button onClick={() =>setCount(prevCount =>prevCount-1)}>Decrement</button>
            {/* <button onClick={() =>setCount(prevCount =>prevCount+5)}>Increment by 5</button> */}
            <button onClick={incrementFive}>Increment by 5</button>
        </div>

    );

}

export default HookCounterTwo;