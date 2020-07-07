import React ,{useState} from 'react'
import {useDispatch} from 'react-redux'
import  {getTasks}from '../../../redux/task/taskAction'
import './AchievementSearch.scss'
const AchievementSearch = () => {
	const dispatch=useDispatch()
	const [text,setText] = useState('')
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('Submit')
		const amount = text.replace(/[A-aZ-z]+/, '')
		const unit = text.replace(/\d+/, '')
		const option = {amount, unit}
		dispatch(getTasks(option))
	}
	return (
		<div>
        What have you achieved in the past   
			<form>
				<input 
					type="text"
					name='period' 
					className='selection__box'
					placeholder='e.g. 3days, 2months' 
					value={text}
					onChange={(e)=>setText(e.target.value)}
				/> 
				<button type='submit' onClick={handleSubmit}>Search</button>
			</form>
		</div>
	)
}

export default AchievementSearch
