import React, { useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import { useSelector } from "react-redux";

const TaskList = () => {
  const tasks = useSelector((state) => state.task.tasks);
  return (
    <div>
      <h1>TaskList</h1>
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;

