import React, { useState } from 'react'

function ToDoItem({ task, onToggleCompletion, onDelete, onEdit }) {

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.content);

    const handleEditSubmit = (e) => {
        e.preventDefault()
        if(editedText.trim()) {
            onEdit(task.id, editedText)
            setIsEditing(false)
        }
    }


    return (
        <li className='flex items-center justify-between p-2 border-b border-slate-300'>
            <div className='flex items-center'>
                <input type='checkbox' className='mr-2' checked={ task.isComplete } onChange={ () => onToggleCompletion(task.id) } />

                { isEditing ? (
                    <form onSubmit={ handleEditSubmit } className='flex items-center'>
                        <input type='text' className='border border-slate-400 rounded px-2.5 py-1.25' value={ editedText } onChange={(e) => setEditedText(e.target.value)} autoFocus />
                        <button type='submit' className='ml-2 text-green-600 hover:text-green-800'>Save</button>
                    </form>
                ) : (
                    <span className={`ml-2 ${task.isComplete ? "line-through text-slate-500" : ""} max-h-24 overflow-y-scroll break-all`}>
                        {task.content}
                    </span>
                )}

            </div>
            <div className='flex items-center'>
                <button onClick={ () => setIsEditing(!isEditing) } className='text-blue-600 hover:text-blue-800 mr-2 cursor-pointer'>
                    { isEditing ? <span class="material-symbols-outlined">cancel</span> : <span class="material-symbols-outlined">edit_note</span> }
                </button>
                <button onClick={() => onDelete(task.id)} className='text-red-600 hover:text-red-800 cursor-pointer'>
                    <span class="material-symbols-outlined">delete</span>
                </button>
            </div>
        </li>
    )

}

export default ToDoItem;