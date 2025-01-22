import { useEffect, useState } from "react";
import "./../Navbar";
const UseEffect = () => {
    var [text, setText] = useState("");
    useEffect(() => {
        console.log(text);
    }, [text])
    return (
        <>
            {/* <Navbar /> */}
            <h1>This is the useEffect example</h1>
            <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
            <h3>The text is {text}</h3>
        </>
    );
}
export default UseEffect;