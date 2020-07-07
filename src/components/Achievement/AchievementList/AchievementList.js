import React from 'react'
import {useSelector} from 'react-redux'
import AchievementItem from '../AchievementItem/AchievementItem'
const AchievementList = () => {
	const completedTasks = useSelector(state=>state.task.tasks)
	return (
		<div>
			{completedTasks.map(task=> <AchievementItem task={task} key={task._id}/>)}
		</div>
	)
}

export default AchievementList
