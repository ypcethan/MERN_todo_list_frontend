import React from 'react'
import TaskInput from '../../Task/TaskInput/TaskInput'
import TaskList from '../../Task/TaskList/TaskList'
import TaskSearch from '../../Task/TaskSearch/TaskSearch'
import "./Home.scss"
const Home = () => {
    return (
        <div className='container'>
            <TaskSearch />
            <TaskInput />
            <TaskList />
        </div>
    )
}

export default Home
