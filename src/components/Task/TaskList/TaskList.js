import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import { useSelector } from "react-redux";

import ClockLoader from "react-spinners/ClockLoader";
const TaskList = () => {
  const tasks = useSelector((state) =>
    state.task.tasks.filter((task) => !task.completed)
  );
  const filtered = useSelector((state) => state.task.filtered);

  const isLoading = useSelector((state) => state.task.isLoading);

  let listToRender = filtered ? filtered : tasks;

  return (
    <div>
      <h1>Task list</h1>
      <ClockLoader
        loading={isLoading}
        css="
        margin:auto;
        margin-top: 3rem;
        "
        color={"#eb8383"}
      />
      {listToRender && listToRender.length > 0
        ? listToRender.map((task) => <TaskItem task={task} key={task._id} />)
        : "No task found"}
    </div>
  );
};

export default TaskList;
