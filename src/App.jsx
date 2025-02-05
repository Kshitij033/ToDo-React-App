import { useState } from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import './App.css'

function App() {

  const [ taskList, setTaskList ] = useState([]);

  // adding new task
  const handleAddTask = (newTaskContent) => {
    if(!newTaskContent.trim()) return;

    const newTask = {
      id: Date.now(),
      content: newTaskContent,
      isComplete: false
    }
    setTaskList((previousTasks) => [newTask, ...previousTasks])
  }

  // toggling the status

  const handleToggleTaskCompletion = (taskId) => {
    setTaskList((previousTasks) => previousTasks.map(task => {
      return task.id == taskId ? { ...task, isComplete: !task.isComplete } : task
    }))
  }

  // deleting a Task

  const handleDeleteTask = (taskId) => {
    setTaskList((previousTasks) => previousTasks.filter(task => {
      return task.id != taskId
    }))
  }

  // to update an existing task

  const handleEditTask = (taskId, newContent) => {
    setTaskList((previousTasks) => previousTasks.map(task => {
      return task.id == taskId ? { ...task, content: newContent } : task
    }))
  }

  return (
    <div className='min-h-screen w-screen mx-auto p-4 bg-white rounded-lg mt-10'>
      <Header />
      <ToDoList taskList = { taskList } onAddTask = { handleAddTask } onToggleTaskCompletion = { handleToggleTaskCompletion } onDeleteTask = { handleDeleteTask } onEditTask = { handleEditTask } />
    </div>
  )
}

export default App
