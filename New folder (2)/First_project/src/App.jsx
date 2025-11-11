// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import { Header } from "./Header";
import { useState } from "react";
import App2 from "./App2.jsx";
import App3 from "./App3.jsx";
// import App4 from "./App4";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

function App() {
  // const[count, setCount] = useState(0);
  // let a = 10;
  // function updateCount() {
  //   setCount(count + 1);
  // }
  // console.log(a);
  return (
    <>
      {/* <Header name="Madhav Gautam" rollno="2410990429" course="B.E. CSE" />
      <Header name="Manu Sharma" rollno="2410990448" course="B.E. CSE" />
      <Header name="Vaibhav Katyal" rollno="2410990480" course="B.E. CSE" /> */}


    {/* <h1>Hello {count} times</h1>
    <button onClick = {updateCount}>Click Me</button> */}
    <App2></App2>
    <App3></App3>
    {/* <App4></App4> */}
  </>
  );
}

export default App;