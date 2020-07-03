import React from "react";
import { useSelector } from "react-redux";
import "./Alerts.scss";
const Alerts = () => {
  const alerts = useSelector((state) => state.alert);

  return (
    <div className="alert__container">
      {alerts.map((alert) => (
        <div className="alert">{alert.msg} </div>
      ))}
    </div>
  );
  // return (
  //   <div className="alert__container">
  //     <div className="alert">Alert 1 </div>
  //     <div className="alert">Alert 2 </div>
  //     <div className="alert">Alert 3 </div>
  //   </div>
  // );
};

export default Alerts;
