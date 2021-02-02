import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos } from '../redux/actions';
import Todo from './Todo';

function Todos() {
    
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)
    const loading = useSelector(state => state.loading)
 

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  

  return(
      loading? (<h1>Please wait....</h1>) : (
      todos.map(todo => {
        return( <Todo key={todo.id} todo={todo} /> ) 
      })
  ))
}
  
export default Todos;
