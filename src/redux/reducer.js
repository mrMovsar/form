const initialState = {
    todos: []
  };
  
  const reducer  = (state = initialState, action) => {
    switch(action.type) {
      case 'todos/load/succes':
        return {
          ...state,
          todos: action.payload,
          loading: false
        }
      case 'todos/load/start':
        return{
          ...state,
          loading: true
        } 
  
      case 'todos/remove/start':
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
  
      case 'todos/remove/succes':
        return{
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload)
        } 
  
      case 'todos/check/succes':
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
  
        case 'todos/check/start':
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