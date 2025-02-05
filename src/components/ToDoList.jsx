import React, { useState } from 'react'
import ToDoItem from './ToDoItem'

function ToDoList({ taskList, onAddTask, onToggleTaskCompletion, onDeleteTask, onEditTask }) {
    const [ newTaskText, setNewTaskText ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTask(newTaskText);
        setNewTaskText("");
    }

    return (
        <div className='max-w-xl mx-auto bg-white rounded shadow p-5'>
            <form onSubmit={ handleSubmit } className='flex mb-4'>
                <input type='text' className='flex-grow border border-slate-500 rounded-1 px-3 focus:outline-none'
                    placeholder='Add a New Task...'
                    value={ newTaskText }
                    onChange={(e) => setNewTaskText(e.target.value)}
                />

                <button type='submit' className='bg-indigo-600 text-white px-4 rounded-r hover:bg-indigo-700 transition-colors'>Add Task</button>

            </form>

            <ul>
                {taskList.map(task => {
                    return <ToDoItem key={ task.id } task={ task } onToggleCompletion={ onToggleTaskCompletion } onDelete= { onDeleteTask } onEdit = { onEditTask }/>
                })}
            </ul>
        </div>
    )
}

export default ToDoList;