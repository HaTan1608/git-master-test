import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { MdTableRows } from "react-icons/md";
import { IconName } from "react-icons/vsc";

import SvgExness from "../../assets/images/SvgExness";
const Main = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mainPage">
      <div className="navbar">
        <div className="openTab" onClick={() => setOpen(!open)}>
          <MdTableRows color="#fff" size={30} />
        </div>
        <div></div>
      </div>
      <div
        className={`navLayer ${open ? "navLayer--open" : "navLayer--close"}`}
      ></div>
      <div className={`slider ${open ? "slider--open" : "slider--close"}`}>
        <div className="menu">
          <div className="tab--active">
            <SvgExness />
            Kết nối đến Exness Partners
          </div>
        </div>
      </div>
      <div className="children-page">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
