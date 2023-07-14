import React from "react"
import Form from "./Form"
import TaskList from "./TaskList"

function App() {
  const [data, setData] = React.useState({
    taskName: '',
    taskDescription: '',
    isCompleted: false,
    tasks: []
  })

  function handleChange(e) {
    const { name, value } = e.target
    setData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  function handleForm(e) {
    e.preventDefault()
    const newTask = {
      taskName: data.taskName,
      taskDescription: data.taskDescription,
      isCompleted: true
    }

    setData(prevData => ({
      ...prevData,
      tasks: [...prevData.tasks, newTask], 
      taskName: '',
      taskDescription: ''
    }))
  }

  return (
    <div>
      <Form handleChange={handleChange} handleForm={handleForm} data={data} />
      <TaskList data={data} /> 
    </div>
  )
}

export default App
