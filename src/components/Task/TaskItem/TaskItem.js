import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  setCurrent,
  clearCurrent,
} from "../../../redux/task/taskAction";
import "./TaskItem.scss";
const TaskItem = ({ task, onDelete }) => {
  const { content, id } = task;
  const dispatch = useDispatch();
  const deleteItem = (e) => {
    dispatch(deleteTask(id));
    dispatch(clearCurrent());
  };

  const setEdit = () => {
    dispatch(setCurrent(task));
  };
  return (
    <div className="task__item">
      <div className="task__item__checkbox dot" onClick={deleteItem} id={id}>
        &#10003;
      </div>
      <div onClick={setEdit}>
        <div className="task__item__content">{content}</div>
      </div>
    </div>
  );
};

export default TaskItem;
