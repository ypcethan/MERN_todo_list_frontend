import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import {
  createTask,
  updateTask,
  clearCurrent,
} from "../../../redux/task/taskAction";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./TaskInputFrom.scss";

const TaskInputFrom = ({ cancel }) => {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.task.current);
  const [task, setTask] = useState("");
  const [date, setDate] = useState(moment());
  const [focused, setFocused] = useState(false);
  const [openSchdule, setOpenSchedule] = useState(false);
  const handleSubmit = () => {
    if (current) {
      // update task

      dispatch(
        updateTask({ ...current, content: task, dueDate: date.toDate() })
      );
      dispatch(clearCurrent());
    } else {
      dispatch(createTask({ content: task, dueDate: date.toDate() }));
    }

    setTask("");
    setDate(moment());
    cancel();
  };

  useEffect(() => {
    if (current) {
      setTask(current.content);
      setDate(moment(current.dueDate));
    }
  }, [current]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  return (
    <div>
      <div className="task-input-form__container">
        <input
          type="text"
          placeholder="What to be done ?"
          className="task-input-form"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <div
          className="task-input-schedule"
          onClick={() => setOpenSchedule(true)}
        >
          {openSchdule ? (
            <SingleDatePicker
              date={date} // momentPropTypes.momentObj or null
              onDateChange={(date) => setDate(date)} // PropTypes.func.isRequired
              numberOfMonths={1}
              focused={focused} // PropTypes.bool
              onFocusChange={({ focused }) => setFocused(focused)} // PropTypes.func.isRequired
              id="your_unique_id" // PropTypes.string.isRequired,
            />
          ) : (
            "Schedule"
          )}
        </div>
      </div>
      <div className="task-input-form__container">
        <button className="task-add__button" onClick={handleSubmit}>
          {current ? "Update" : "Add Task"}
        </button>
        <button className="task-cancel__button" onClick={cancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TaskInputFrom;
