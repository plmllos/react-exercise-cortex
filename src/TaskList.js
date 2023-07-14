import React from "react"

export default function TaskList(props) {

    const taskElements = props.data.tasks.map(item => {
        return (
            <>
                {(item.taskName && item.taskDescription) && <div>
                    <h1> {item.taskName} </h1>
                    <p> {item.taskDescription} </p>
                    <button onClick={completedTask}> Mark as complete </button>
                    <button onClick={deleteTask}> Delete Task </button>  
                </div>}
            </>
        )
    })

    function completedTask() {
        console.log("completed")
    }

    function deleteTask() {
        console.log("delete")
    }
 
    return (
        <main className="task" >
            {taskElements}
        </main>
    )
}