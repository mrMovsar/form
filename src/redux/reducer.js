const initialState = {
    todos: []
  };
  
  const reducer  = (state = initialState, action) => {
    switch(action.type) {
      case 'load':
        return {
          ...state,
          todos: action.payload,
          loading: false
        }
      case 'start':
        return{
          ...state,
          loading: true
        } 
  
      case 'startDeleting':
        return {
          ...state,
          todos: state.todos.map((todo) => {
            if(todo.id === action.payload) {
              return {
                ...todo,
                deleting: true
              }
            }
            return todo;
          })
        }
  
      case 'delete':
        return{
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload)
        } 
  
      case 'check':
        return{
          ...state,
          todos: state.todos.map((todo) => {
            if(todo.id === action.payload) {
              return {
                ...todo,
                completed: !todo.completed,
                checking: false
              }
            }
            return todo;
          })
        }
  
        case 'startChecking':
          return{
            ...state,
            todos: state.todos.map((todo) => {
              if(todo.id === action.payload) {
                return {
                  ...todo,
                  checking: true
                }
              }
              return todo;
            })
          }  
        default:
          return state;
    }
  }

  export default reducer;