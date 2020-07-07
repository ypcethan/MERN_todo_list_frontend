import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TaskInput from "../../Task/TaskInput/TaskInput";
import TaskList from "../../Task/TaskList/TaskList";
import TaskSearch from "../../Task/TaskSearch/TaskSearch";
import { getTasks } from "../../../redux/task/taskAction";
import "./Home.scss";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <TaskSearch />
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Home;
