import React from 'react'
import "./TaskItem.scss"
const TaskItem = ({ task, onDelete }) => {
    const { content, id } = task
    const deleteItem = (e) => {
        const id = parseInt(e.target.id)
        onDelete(id)
    }
    return (
        <div className='task__item'>
            <div
                className='task__item__checkbox dot'
                onClick={deleteItem}
                id={id}
            >
                &#10003;
            </div>
            <div className='task__item__content'>
                {content}
            </div>
        </div>
    )
}

export default TaskItem
