import React, { useState } from 'react'

function Counter(){
    const[count, setCount] = useState(0)

    function plus(){
        setCount(count+1)
      }
      function minus(){
        setCount(count-1)
      }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={plus}>плюс</button>
            <button onClick={minus}>минус</button>
        </div>
    )
}

export default Counter;