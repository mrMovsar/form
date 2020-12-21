import {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [mahr, setMahr] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
      response.json().then((json) => {
        setMahr(json);
    })
  })
  }, []);
  
  
 const m = mahr.filter(item => item.id<=50)
  const t = m.map((item) => {
    const todoclass = item.completed?"todoselected" : "todo";
    return(
      <table border="1">
        <tr>
          <td className="tab">{item.id}</td>
          <td  className={todoclass}>{item.title}</td>
        </tr>
        
      </table>
    )
  })  
  return (
    <div>
      <h1>...JSON</h1> 
      {t}
    </div>
  );
}

export default App;
