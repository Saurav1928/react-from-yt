import Fun from "./Fun"

function App() {
  const username= "saurav1928"
  return (
<>
<h2>Hello {username}</h2>
{/* ONLY Evaluated variables are allowed , because of syntax*/}
<Fun />
</>
  )
}

export default App
