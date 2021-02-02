import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { loadTodos, removeTodo, checkTodo } from './redux/actions';
import ReactLoading from 'react-loading';
function App() {

  const todos = useSelector(state => state.todos)
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  const handleDelete = (id) => {
    dispatch(removeTodo(id))
  }

  const handleCheck = (id, completed) => {
    dispatch(checkTodo(id, completed))
  }

  return(
    <div className="main">
      {loading? <h1>Please wait</h1> :
      <div className="spisok"><h1>Список дел</h1></div> }
      {todos.map(todo => {
        const todoclass = todo.completed?"todoclick" : "todo";
        return(
          <div className={todoclass}>
            <div className="title">
              {todo.checking? <ReactLoading color="000222" type="spin" 
              width={15} height={15} className="spin"/> : 
              <input type="checkbox" 
              className="check" 
              checked = {todo.completed} 
              onClick={() => handleCheck(todo.id, todo.completed)} />}
              <div >{todo.title}</div>
            </div>
            
            <button 
            onClick={() => handleDelete(todo.id)}
            className="butt"
            disabled={todo.deleting}>
              delete</button>  
          </div>
        ) 
      })}
    </div>
  )
}
  
export default App;
