import React, { useState } from 'react'
import "./TaskInput.scss"
const TaskInput = () => {
    const [writing, setWriting] = useState(false)
    return (
        <div>
            <div className="task__add__button">
                Add task
            </div>
        </div>
    )
}

export default TaskInput
