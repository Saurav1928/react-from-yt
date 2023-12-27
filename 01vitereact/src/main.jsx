import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import fun from './Fun.jsx'

// const reactElement= {
//   type:'a',
//   props:{
//       href:"http://google.com",
//       target:'_blank'
//   },
//   children:"Click me for google"
// }

//standard and used by react-> babble injects it
const reactElement = React.createElement(
  'a', 
  {href:'https://google.com', traget:'_blank'},// if no attribute -> keep it empty like {} but necessary to write
  'Google.com'
)




ReactDOM.createRoot(document.getElementById('root')).render(
    // reactElement
    <App/>
)
