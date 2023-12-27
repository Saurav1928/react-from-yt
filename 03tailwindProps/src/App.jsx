import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  // const userObj = {
  //   username: "Kalash",
  //   age: 21
  // }
  // const arr = [1, 2, 3, 4]
  return (
    <>
      <h1 className='bg-red-400 p-4 text-red rounded-xl mb-4 '>Tailwind Css</h1>
      {/* <Card myVar="Hello from App" user={obj} myObj2={arr} /> */}
      <Card msg="Hello from App" username="ABCD" btnText="Subscribe" />
      <Card msg="I am 2nd Card" username="XYZ" btnText="Like" />
    </>
  )
}

export default App
