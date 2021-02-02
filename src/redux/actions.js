export function loadTodos () {
    return (dispatch) => {
        dispatch({
            type: 'start'
        })
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(response => response.json())
            .then(json=>{
                dispatch({
                    type: 'load',
                    payload: json
                })
            })
    }
}

export function removeTodo (id) {
    return (dispatch) => {
        dispatch({
            type: 'startDeleting',
            payload: id
        })
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10/${id}`,{
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(()=>{
                dispatch({
                    type: 'delete',
                    payload: id
                })
            })
    }
}

export function checkTodo (id, completed) {
    return (dispatch) => {
        dispatch({
            type: 'startChecking',
            payload: id
        })
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10/${id}`,{
            method: 'PATCH',
            body: JSON.stringify({completed: !completed}),
            headers:{"Content-type": "application/json"}

        })
            .then(response => response.json())
            .then(()=>{
                dispatch({
                    type: 'check',
                    payload: id
                })
            })
    }
}