import { useState, useEffect } from "react";
function App4(){
    const[count, setCount] = useState(0);
    const[data, setData] = useState(100);
    useEffect(() => {
        console.log("Component Rendered");
    }, []);
    function updateCount() {
        setCount(count+1);
    }
    function handleData() {
        setData(data-1);
    }
    return(
        <>
            <h1>Hello {count} times from App4</h1>
            <button onClick={updateCount}>Click Me</button>
            <h1>Data is {data}</h1>
            <button onClick={handleData}>Update Data</button>
        </>
    );
}
export default App4;