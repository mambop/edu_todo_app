import React, { useState } from 'react'

const Todo = ({addTodo}) => {
    const [todos, setState] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todos);
        setState('')
    }

    const handleChange = (e) =>{
        setState(e.target.value)
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Add todo....' value={todos} onChange={handleChange} />
            </form>

        </div>
    )
}
export default Todo