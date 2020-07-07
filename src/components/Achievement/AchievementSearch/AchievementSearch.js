import React ,{useState ,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {DebounceInput} from 'react-debounce-input'
import  {getTasks , clearTasks}from '../../../redux/task/taskAction'

import  {setAlert}from '../../../redux/alert/alertAction'
import './AchievementSearch.scss'
const AchievementSearch = () => {
	const dispatch=useDispatch()
	const [text,setText] = useState('')
	const handleChange = (e) => {
		setText(e.target.value)
	}
	useEffect(()=> {
		const amount = text.replace(/[A-aZ-z]+/, '')
		const unit = text.replace(/\d+/, '')
		if (unit.length > 0 && !unit.match(/(days|day|month|months|week|weeks)/)){
			dispatch(setAlert('The input value seems wrong'))
			dispatch(clearTasks())
		}
		else{
			const option = {amount, unit}
			dispatch(getTasks(option))
		}
	}, [dispatch, text])
	return (
		<div>
			<span className='achievement__label'>
				What have you achieved in the past   
			</span>
			<DebounceInput 
				type="text"
				name='period' 
				className='selection__box'
				placeholder='e.g. 3days, 2months' 
				value={text}
				onChange={handleChange}
				debounceTimeout={1000}
				minLength={3}
			/> 
		</div>
	)
}

export default AchievementSearch
