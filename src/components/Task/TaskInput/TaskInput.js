import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import TaskInputForm from "../TaskInputForm/TaskInputFrom";
import { clearCurrent } from "../../../redux/task/taskAction";
import "./TaskInput.scss";
const TaskInput = () => {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.task.current);
  const [writing, setWriting] = useState(false);

  useEffect(() => {
    if (current !== null) {
      setWriting(true);
    } else {
      setWriting(false);
    }
  }, [current]);

  const onCancel = () => {
    setWriting(false);
    dispatch(clearCurrent());
  };
  return (
    <div>
      <div
        className={"task__add__button " + (writing ? "moveUp" : "moveDown")}
        onClick={() => setWriting(true)}
      >
        <FontAwesomeIcon icon={faPlus} className="task__add__icon" />
        Add task
      </div>
      <div className={writing ? "moveDown" : "moveUp"}>
        {writing && <TaskInputForm cancel={onCancel} />}
      </div>
    </div>
  );
};

export default TaskInput;
