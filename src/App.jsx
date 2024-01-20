import "./App.css";
import { useState } from "react";

function App() {
  const [person, setPerson] = useState("Ali Hassan");
  const [age, setAge] = useState(20);
  let [count, setcount] = useState(0);


    


  return (
    <div className="App">
  <h2>My name is {person}</h2>
      <button
        onClick={() => {
          setPerson("developer-belal");
        }}
      >
        Change name
      </button>

    <h2>my age  {age}</h2>  
    <button onClick={()=>{setAge(28)}}>Change age </button>
    <br /><br /><br />
    <button onClick={()=>{setcount(count+1)}} >count {count}</button>
    </div>
  );
}

export default App;
