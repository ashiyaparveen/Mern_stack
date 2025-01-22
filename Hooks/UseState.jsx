import {  useState } from "react"
import Navbar from "../Navbar";
var UseState = () => {
    var [num, setNum] = useState(0);
    return (
        <>
            <Navbar />
            <h1>This is the example of use state Example</h1>
            <h3>The number is {num}</h3>
            <button onClick={() => { setNum(num - 1) }}>-</button>
            <button onClick={() => { setNum(num + 1) }}>+</button>
            <button onClick={() => { setNum(0) }}>Reset</button>
        </>
    )
}
export default UseState;