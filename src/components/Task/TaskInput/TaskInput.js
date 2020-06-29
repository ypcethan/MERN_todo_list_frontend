import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TaskInputForm from '../TaskInputForm/TaskInputFrom'
import "./TaskInput.scss"
const TaskInput = () => {
    const [writing, setWriting] = useState(false)
    return (
        <div>
            <div
                className="task__add__button"
                onClick={() => setWriting(true)}>
                <FontAwesomeIcon
                    icon={faPlus}
                    className='task__add__icon' />
                Add task
            </div>
            {writing &&
                <TaskInputForm cancel={() => setWriting(false)} />
            }
        </div>
    )
}

export default TaskInput
