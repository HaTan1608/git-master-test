import React from "react";
import { Outlet } from "react-router-dom";

const Main = ({ children }) => {
  return (
    <div className="mainPage">
      <div className="navbar"></div>
      <div className="slider">
        <div className="menu">
          <div className="tab--active">Kết nối đến Exness Partners</div>
        </div>
      </div>
      <div className="children-page">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
