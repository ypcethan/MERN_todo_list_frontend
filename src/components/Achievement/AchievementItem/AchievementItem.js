import React from 'react'
import moment from 'moment'
import './AchievementItem.scss'
const AchievementItem = ({task}) => {
	const formattedDate = () => {
		return moment(task.completedDate, 'YYYYMMDD').fromNow()
	}
	return (
		<div className='item__container'>
			<div>
				{task.content} 
			</div>
			<div>
				{formattedDate()}
			</div>
		</div>
	)
}

export default AchievementItem
