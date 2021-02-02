import ReactLoading from 'react-loading';
import { useDispatch } from 'react-redux';
import { removeTodo, checkTodo } from '../redux/actions';
    
function Todo(props) {

    const handleDelete = (id) => {
        dispatch(removeTodo(id))
    };

    const handleCheck = (id, completed) => {
        dispatch(checkTodo(id, completed))
    };

    const dispatch = useDispatch();

    const todoclass = props.todo.completed?"todoclick" : "todo";
    return (
        <div className={todoclass}>
            <div className="title">
              {props.todo.checking? <ReactLoading color="000222" type="spin" 
              width={15} height={15} className="spin"/> : 
              <input type="checkbox" 
              className="check" 
              checked = {props.todo.completed} 
              onClick={() => handleCheck(props.todo.id, props.todo.completed)} />}
              <div >{props.todo.title}</div>
            </div>
            
            <button 
            onClick={() => handleDelete(props.todo.id)}
            className="btn"
            disabled={props.todo.deleting}>
              delete</button>  
          </div>
    )
}

export default Todo;