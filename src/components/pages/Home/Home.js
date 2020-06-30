import React from 'react'
import TaskInput from '../../Task/TaskInput/TaskInput'
import TaskList from '../../Task/TaskList/TaskList'
import "./Home.scss"
const Home = () => {
    return (
        <div className='container'>
            <TaskInput />
            <TaskList />
        </div>
    )
}

export default Home
