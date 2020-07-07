import axios from 'axios'
import {
	GET_TASKS,
	CREATE_TASK,
	DELETE_TASK,
	UPDATE_TASK,
	SET_CURRENT,
	CLEAR_CURRENT,
	FILTER_TASK,
	CLEAR_FILTER,
	CLEAR_TASKS,
} from './taskType'

let baseUrl
baseUrl = process.env.REACT_APP_BACKEND_URL
// if (process.env.NODE_ENV !== "production") {
//   baseUrl = process.env.REACT_APP_BACKEND_URL;
// } else {
//   baseUrl = process.env.BACKEND_URL;
// }
export const filterTask = (text) => {
	return {
		type: FILTER_TASK,
		payload: text,
	}
}

export const clearFilter = () => {
	return {
		type: CLEAR_FILTER,
	}
}

export const clearTasks = () => {
	return {
		type: CLEAR_TASKS,
	}
}
export const getTasks = (options=null) => {
	return async (dispatch) => {
		try {
			let response
			if (options){
				const {amount , unit} = options
				response = await axios.get(baseUrl + `/api/tasks/completed/${amount}/${unit}`)
			}
			else{
				response = await axios.get(baseUrl + '/api/tasks')
			}
			dispatch({
				type: GET_TASKS,
				payload: response.data.tasks,
			})
		} catch (e) {
			console.error(e)
		}
	}
}

export const createTask = (task) => {
	return async (dispatch) => {
		console.log(task)
		try {
			const response = await axios.post(baseUrl + '/api/tasks', {
				content: task.content,
				dueDate: task.dueDate,
			})
			dispatch({
				type: CREATE_TASK,
				payload: response.data.task,
			})
		} catch (e) {
			console.error(e)
		}
	}
}

export const updateTask = (task) => {
	return async (dispatch) => {
		const bodyData = {
			content: task.content,
			dueDate: task.dueDate,
			completed:task.completed,
			completedDate:task.completedDate || null
		}

		try {
			const response = await axios.patch(
				baseUrl + `/api/tasks/${task._id}`,
				bodyData
			)
			dispatch({
				type: UPDATE_TASK,
				payload: response.data.task,
			})
		} catch (e) {
			console.error(e)
		}
	}
}
export const deleteTask = (id) => {
	return async (dispatch) => {
		try {
			const response = await axios.delete(baseUrl + `/api/tasks/${id}`)
			dispatch({
				type: DELETE_TASK,
				payload: id,
			})
		} catch (e) {
			console.error(e)
		}
	}
}
export const setCurrent = (task) => {
	return {
		type: SET_CURRENT,
		payload: task,
	}
}

export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT,
	}
}
