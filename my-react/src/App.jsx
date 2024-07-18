import React from "react";
import { useState } from "react";

function App() {

  const [value, setValue] = useState("")
  const [save, setSave] = useState([])

  function save() {
    setSave((prev) =>[...prev, value])
  }

  function value(e) {
    setValue(e.target.value)
  }


return  (
  <div className="App"> 
    <Counter/>
    <h2>{value}</h2>
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    <button onClick={save}>сохранить</button>
    <p>{value}</p>
  </div>
)
}

export default App;