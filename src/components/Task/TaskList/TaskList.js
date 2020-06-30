import React, { useState } from 'react'
import TaskItem from "../TaskItem/TaskItem"


const taskData = [
    {
        id: 1,
        completed: false,
        content: "Task 1"
    }
    ,
    {
        id: 2,
        completed: false,
        content: "Task 2"
    }
]
const TaskList = () => {
    const [tasks, setTasks] = useState(taskData)
    const onDelete = (id) => {
        setTasks(
            tasks.filter(task => task.id !== id)
        )
    }
    return (
        <div>
            <h1>TaskList</h1>
            {tasks.map(task => (
                <TaskItem task={task} onDelete={onDelete} key={task.id} />
            ))}

        </div>
    )
}

export default TaskList