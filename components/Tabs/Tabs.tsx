import React, { useState } from "react";
import styles from "./tabs.module.css";
import BalancePanel from "./TabPanel/Pannel/BalancePanel";
import GeneralPanel from "./TabPanel/Pannel/GeneralPanel";
import TrandingPanel from "./TabPanel/Pannel/TrandingPanel";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index: number) => {
    setToggleState(index);
  };
  const tabList = [
    { id: 1, name: "General" },
    { id: 2, name: "Balance" },
    { id: 3, name: "Tranding" },
    { id: 4, name: "Market" },
    { id: 5, name: "Websocket" },
  ];
  return (
    <>
      <div className="my-3">
        <ul className="nav nav-tabs">
          {tabList.map((item, index) => (
            <li className="nav-item" key={index}>
              <a
                className={
                  toggleState === item.id ? "nav-link active" : "nav-link"
                }
                onClick={() => toggleTab(item.id)}
                aria-current="page"
                href="#"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="tab-panel">
        <div className={toggleState === 1 ? styles.activePanel : styles.panel}>
          <GeneralPanel />
        </div>
        <div className={toggleState === 2 ? styles.activePanel : styles.panel}>
          <BalancePanel />
        </div>
        <div className={toggleState === 3 ? styles.activePanel : styles.panel}>
          <TrandingPanel />
        </div>
      </div>
    </>
  );
};

export default Tabs;
