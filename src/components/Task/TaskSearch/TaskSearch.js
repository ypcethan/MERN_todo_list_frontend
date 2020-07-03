import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./TaskSearch.scss"
import { filterTask, clearFilter } from '../../../redux/task/taskAction'
const TaskSearch = () => {

    const dispatch = useDispatch()
    const [text, setText] = useState("")
    useEffect(() => {
        if (text.length === 0) {
            dispatch(clearFilter())
        }
        else {
            dispatch(filterTask(text))
        }
        // eslint-disable-next-line
    }, [text])
    return (
        <div className='task__search__container'>
            <FontAwesomeIcon
                icon={faSearch}
                className="task__search__icon" />
            <input type="text"
                placeholder='Search'
                className='task__search__inputbox'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    )
}

export default TaskSearch
