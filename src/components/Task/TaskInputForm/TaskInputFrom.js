import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import moment from "moment";
import {
  createTask,
  clearCurrent,
  updateTask,
} from "../../../redux/task/taskAction";
import { v4 as uuidv4 } from "uuid";
import "react-datepicker/dist/react-datepicker.css";
import "./TaskInputFrom.scss";

const TaskInputFrom = ({ cancel }) => {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.task.current);
  const [task, setTask] = useState("");
  const [date, setDate] = useState(new Date());
  const [openSchdule, setOpenSchedule] = useState(false);
  const handleSubmit = () => {
    if (current) {
      // update task
      dispatch(updateTask({ ...current, content: task, dueDate: date }));
      // dispatch(clearCurrent());
    } else {
      dispatch(createTask({ content: task, dueDate: date }));
    }

    setTask("");
  };

  useEffect(() => {
    if (current) {
      setTask(current.content);
      setDate(new Date(current.dueDate));
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
            <DatePicker
              showPopperArrow={false}
              minDate={new Date()}
              selected={date}
              onChange={handleDateChange}
              popperModifiers={{
                offset: {
                  enabled: true,
                  offset: "5px, 10px",
                },
                preventOverflow: {
                  enabled: true,
                  escapeWithReference: false,
                  boundariesElement: "viewport",
                },
              }}
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
