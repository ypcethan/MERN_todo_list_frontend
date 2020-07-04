import React from "react";
import { useSelector } from "react-redux";
import "./Alerts.scss";
const Alerts = () => {
  const alerts = useSelector((state) => state.alert);

  return (
    <div className="alert__container">
      {alerts.map((alert) => (
        <div className="alert" key={alert.id}>
          {alert.msg}{" "}
        </div>
      ))}
    </div>
  );
};

export default Alerts;
