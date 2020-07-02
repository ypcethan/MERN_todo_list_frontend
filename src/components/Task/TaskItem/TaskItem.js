import React from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import {
  deleteTask,
  setCurrent,
  clearCurrent,
} from "../../../redux/task/taskAction";
import "./TaskItem.scss";

const TaskItem = ({ task, onDelete }) => {
  const { content, id, dueDate } = task;
  const formattedDate = moment(dueDate).format("MMM Do");
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
      <div className="task__item__content__container">
        <div onClick={setEdit}>
          <div className="task__item__content">{content}</div>
        </div>
        <div className="task__item__time">{formattedDate.toString()}</div>
      </div>
    </div>
  );
};

export default TaskItem;
