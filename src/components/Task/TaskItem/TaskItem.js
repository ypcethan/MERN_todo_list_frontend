import React from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import {
	deleteTask,
	updateTask,
	setCurrent,
	clearCurrent,
} from '../../../redux/task/taskAction'
import './TaskItem.scss'

const TaskItem = ({ task }) => {
	const { content, _id, dueDate } = task
	const formattedDate = moment(dueDate).format('MMM Do')
	const dispatch = useDispatch()
	const deleteItem = () => {
		dispatch(deleteTask(_id))
		dispatch(clearCurrent())
	}
	const completeTask = () => {
		dispatch(updateTask({...task , completed: true ,completedDate:new Date()}))
	}

	const setEdit = () => {
		dispatch(setCurrent(task))
	}
	return (
		<div className="task__item__container">

			<div className="task__item">
				<div className="task__item__checkbox dot" onClick={completeTask} >
        &#10003;
				</div>
				<div className="task__item__content__container">
					<div onClick={setEdit}>
						<div className="task__item__content">{content}</div>
					</div>
					<div className="task__item__time">{formattedDate.toString()}</div>
				</div>
			</div>
			<button className="task__item__delete__btn"
				onClick={deleteItem} 
			>delete</button>
		</div>
	)
}

export default TaskItem
