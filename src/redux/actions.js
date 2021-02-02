export function loadTodos () {
    return (dispatch) => {
        dispatch({
            type: 'todos/load/start'
        })
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(json=>{
                dispatch({
                    type: 'todos/load/succes',
                    payload: json
                })
            })
    }
}

export function removeTodo (id) {
    return (dispatch) => {
        dispatch({
            type: 'todos/remove/start',
            payload: id
        })
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(()=>{
                dispatch({
                    type: 'todos/remove/succes',
                    payload: id
                })
            })
    }
}

export function checkTodo (id, completed) {
    return (dispatch) => {
        dispatch({
            type: 'todos/check/start',
            payload: id
        })
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            method: 'PATCH',
            body: JSON.stringify({completed: !completed}),
            headers:{"Content-type": "application/json"}

        })
            .then(response => response.json())
            .then(()=>{
                dispatch({
                    type: 'todos/check/succes',
                    payload: id
                })
            })
    }
}