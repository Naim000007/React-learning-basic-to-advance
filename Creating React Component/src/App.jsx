import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RandomNumber from './page/RandomNumber';
import RandomNumberGenarator from './page/RandomNumberGenarator';


function App() {
  const [count, setCount] = useState(0)
  let number = 1;
  let fullName = (name) =>{
    return name
  }

  return (
    <>
    <p>MessageNo: {number} i am your master {fullName("naim")}</p>
    <RandomNumber/>
    <RandomNumberGenarator/>
    </>
  )
}

export default App
