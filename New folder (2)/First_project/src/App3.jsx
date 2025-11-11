import { useState } from "react";
function App3(){
    const [count, setCount] = useState(0);
    function updateCount() {
        setCount(count + 1);
    }
    return(
        <>
            <h1>Hello {count} times from App3</h1>
            <button onClick={updateCount}>Click Me</button>
        </>
    );
}
export default App3;