// // import { useState } from 'react'
// // import './App.css'

// // function App() {
// //   let counter = 0;
// //   const incrementVal = () => {
// //     counter++;
// //     console.log("Value added", counter);
// //   }
// //   return (
// //     <>
// //       <h1>Hello from App</h1>
// //       <h2>Counter value : {counter} </h2>
// //       <button onClick={incrementVal}>Inc</button>
// //       <br />
// //       <br />
// //       <button>Dec</button>
// //     </>
// //   )
// // }

// // export default App



// import { useState } from 'react'
// import './App.css'

// function App() {
//   let [counter, setCounter] = useState(15);
//   // --->  let counter;  useState(default value);
//   const incrementVal = () => {
//     // setCounter(newValue for counter variable)
//     // if (counter < 30)
//       setCounter(counter + 1);
//   }
//   const decremental = () => {
//     // if (counter > 0)
//       setCounter(counter - 1);
//   }
//   return (
//     <>
//       <h1>Hello from App</h1>
//       <h2>Counter value : {counter} </h2>
//       <button onClick={incrementVal}>Inc</button>
//       <br />
//       <br />
//       <button onClick={decremental}>Dec</button>
//     </>
//   )
// }

// export default App









// import { useState } from 'react'
// import './App.css'

// function App() {
//   let counter = 0;
//   const incrementVal = () => {
//     counter++;
//     console.log("Value added", counter);
//   }
//   return (
//     <>
//       <h1>Hello from App</h1>
//       <h2>Counter value : {counter} </h2>
//       <button onClick={incrementVal}>Inc</button>
//       <br />
//       <br />
//       <button>Dec</button>
//     </>
//   )
// }

// export default App



import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

  const incrementVal = () => {

    setCounter(counter + 1);
    setCounter(counter + 2);
    setCounter(counter + 10);
    setCounter(counter + 40);// this will be executed
  }
  const decremental = () => {

    setCounter(counter - 1);
  }
  return (
    <>
      <h1>Hello from App</h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={incrementVal}>Inc</button>
      <br />
      <br />
      <button onClick={decremental}>Dec</button>
    </>
  )
}

export default App

