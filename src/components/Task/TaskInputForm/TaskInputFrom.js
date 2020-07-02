import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createTask,
  clearCurrent,
  updateTask,
} from "../../../redux/task/taskAction";
import { v4 as uuidv4 } from "uuid";
import "./TaskInputFrom.scss";
const TaskInputFrom = ({ cancel }) => {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.task.current);
  const [task, setTask] = useState("");
  const handleSubmit = () => {
    if (current) {
      // update task
      dispatch(updateTask({ ...current, content: task }));
      dispatch(clearCurrent());
    } else {
      dispatch(createTask({ content: task, id: uuidv4() }));
    }

    setTask("");
  };

  useEffect(() => {
    if (current) {
      setTask(current.content);
    }
  }, [current]);
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
        <div className="task-input-schedule">Schedule</div>
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
