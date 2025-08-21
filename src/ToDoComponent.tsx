import './ToDo.css'
import { useState } from 'react'
import type { ToDoItem } from './types/ToDoItem'

export const ToDoComponent = () => {
    // Declare states
    const [todoTitle, setTodoTitle] = useState<string>('')
    const [todoBody, setTodoBody] = useState<string>('')
    const [todos, setTodos] = useState<ToDoItem[]>([])

    return(
        <>
        <h1>To-Do App</h1>
        <div>
            <input onChange={(e) => {
                    setTodoTitle(e.target.value)
                }} placeholder='Title' value={todoTitle}/>

            <input onChange={(e) => {
                    setTodoBody(e.target.value)
                }} placeholder='Body' value={todoBody}/>

            <button onClick={() => {
                setTodos([...todos, { id: Date.now().toString(), title: todoTitle, body: todoBody, status: 'IN_PROGRESS' }])
                setTodoTitle('')
                setTodoBody('')
            }}>Add Task</button>
        </div>
        <div>
            <ul>
                {todos?.map((todo: ToDoItem) => <li>{todo.id} | {todo.title} | {todo.status}</li>)}
            </ul>
        </div>
        </>
    )
}