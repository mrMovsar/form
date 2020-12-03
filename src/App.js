import { useState } from 'react'
import './App.css';

function App() {
  const [check, setCheck] = useState(false);
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([
    {title:"mahram", completed: true},
    {title:"general", completed: true},
  ])
  const handleCheck = () => {
  setCheck(!check);
}
  const handleChange = (e) =>{
    setText(e.target.value)
  }
  const handleReset = () =>{
    setText("");
    setTodo([]);
  }
  const handleAdd = () =>{
    setTodo([{title: text, completed: check}, ...todo])
    setText("");
    setCheck(false);
  }
  
  return (
    <div className="App">
      <input type="checkbox"
      checked={check}
      onChange={handleCheck}
     />
     <input
     type="text"
     value={text}
     onChange={handleChange}
     placeholder="Введите текст"
     />
     <button onClick={handleReset}>Reset</button>
     <button onClick={handleAdd}>Add</button>
     <div>
       {todo.map((prod) => {
         return (
           <div>
              <input type="checkbox" checked={prod.completed}/>
             {prod.title}
             </div>
         )
       })}
     </div>
    </div>
  );
}

export default App;
