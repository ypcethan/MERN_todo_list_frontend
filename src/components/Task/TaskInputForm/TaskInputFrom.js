import React from 'react'
import "./TaskInputFrom.scss"
const TaskInputFrom = ({ cancel }) => {
    return (
        <div>
            <div className='task-input-form__container'>
                <input
                    type="text"
                    placeholder='What to be done ?'
                    className='task-input-form' />
                <div className='task-input-schedule'>
                    Schedule
                </div>
            </div>
            <div className='task-input-form__container'>
                <button
                    className='task-add__button'>
                    Add task
                </button>
                <button
                    className='task-cancel__button'
                    onClick={cancel}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default TaskInputFrom
