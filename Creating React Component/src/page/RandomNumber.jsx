import React from 'react'

const RandomNumber = () => {
    let number = ()=>{
        let a = Math.random() *100;
        return a;
    } 
  return (
    <div>
        <h1>Random Number is {Math.round(number())}</h1>
    </div>
  )
}

export default RandomNumber