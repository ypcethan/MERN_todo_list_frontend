import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import { useSelector } from "react-redux";

const TaskList = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const filtered = useSelector((state) => state.task.filtered);

  let listToRender = filtered ? filtered : tasks;

  return (
    <div>
      <h1>TaskList</h1>
      {listToRender.length > 0
        ? listToRender.map((task) => <TaskItem task={task} key={task._id} />)
        : "No task found"}
    </div>
  );
};

export default TaskList;
