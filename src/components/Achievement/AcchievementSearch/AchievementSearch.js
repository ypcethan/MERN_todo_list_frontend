
import React from 'react'

const AchievementSearch = () => {
    return (
        <div>
            
      <label htmlFor="period">
        What have you achieved in the past   
      </label>
      <input 
      type="text"
       name='period' 
       className='selection__box'
       placeholder='e.g. 3days, 2months' /> 
        </div>
    )
}

export default AchievementSearch
