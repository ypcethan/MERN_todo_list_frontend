import React from "react";
import { useSelector } from "react-redux";
import ClockLoader from "react-spinners/ClockLoader";
import AchievementItem from "../AchievementItem/AchievementItem";
const AchievementList = () => {
  const completedTasks = useSelector((state) => state.task.tasks);
  const isLoading = useSelector((state) => state.task.isLoading);
  return (
    <div>
      <ClockLoader
        loading={isLoading}
        css="
        margin:auto;
        margin-top: 3rem;
        "
        color={"#eb8383"}
      />
      {completedTasks.map((task) => (
        <AchievementItem task={task} key={task._id} />
      ))}
    </div>
  );
};

export default AchievementList;
