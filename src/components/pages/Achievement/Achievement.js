import React from 'react'
import AchievementSearch from '../../Achievement/AchievementSearch/AchievementSearch'
import AchievementList from '../../Achievement/AchievementList/AchievementList'
import './Achievement.scss'
const Achievement = () => {
	return (
		<div className='container'>
			<h1>Achievement</h1>
			<AchievementSearch />
			<AchievementList />
		</div>
	)
}

export default Achievement
