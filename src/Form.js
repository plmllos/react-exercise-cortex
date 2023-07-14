import React from "react"

export default function Form(props) {
    return (
        <form className="taskForm" onSubmit={props.handleForm}>  
            <label htmlFor="taskName"> Task name </label>
            <input 
            type="text"
            id="taskName"
            onChange={props.handleChange}
            placeholder="Enter task name"
            name="taskName"
            value={props.data.taskName}
            />
            <label htmlFor="taskDescription"> Task Description </label>
            <input 
            type="text"
            id="taskDescription"
            onChange={props.handleChange}
            placeholder="Enter task Description"
            name="taskDescription"
            value={props.data.taskDescription}
            />
            <button> Add Task </button>
        </form>
    )
}