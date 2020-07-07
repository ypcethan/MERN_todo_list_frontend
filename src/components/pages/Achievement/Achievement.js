import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import AchievementSearch from '../../Achievement/AchievementSearch/AchievementSearch'
import AchievementList from '../../Achievement/AchievementList/AchievementList'
import {clearTasks}from '../../../redux/task/taskAction'
import './Achievement.scss'
const Achievement = () => {
	const dispatch = useDispatch()
	useEffect(()=> {
		dispatch(clearTasks())	
	}, [])
	return (
		<div className='container'>
			<h1>Achievements</h1>
			<AchievementSearch />
			<AchievementList />
		</div>
	)
}

export default Achievement
