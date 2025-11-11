function App2() {
    const count = 0;
    function updateCount() {
        count++;
    }
    return (
        <>
            <h1>Hello {count} times from App2</h1>
            <button onClick={updateCount}>Click Me</button>
        </>
    );
}
export default App2;