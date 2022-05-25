import React, { useState } from "react";
import styles from "./tabs.module.css";
import cx from "classnames";
import BalancePanel from "./TabPanel/Pannel/BalancePanel";
import GeneralPanel from "./TabPanel/Pannel/GeneralPanel";
import TrandingPanel from "./TabPanel/Pannel/TrandingPanel";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index: number) => {
    setToggleState(index);
  };
  return (
    <div>
      {" "}
      <div className="my-3">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              className={toggleState === 1 ? "nav-link active" : "nav-link"}
              onClick={() => toggleTab(1)}
              aria-current="page"
              href="#"
            >
              General
            </a>
          </li>
          <li className="nav-item">
            <a
              className={toggleState === 2 ? "nav-link active" : "nav-link"}
              onClick={() => toggleTab(2)}
              href="#"
            >
              Balance
            </a>
          </li>
          <li className="nav-item">
            <a
              className={toggleState === 3 ? "nav-link active" : "nav-link"}
              onClick={() => toggleTab(3)}
              href="#"
            >
              Tranding
            </a>
          </li>
          <li className="nav-item">
            <a
              className={toggleState === 4 ? "nav-link active" : "nav-link"}
              onClick={() => toggleTab(4)}
              href="#"
            >
              Market
            </a>
          </li>
          <li className="nav-item">
            <a
              className={toggleState === 5 ? "nav-link active" : "nav-link"}
              onClick={() => toggleTab(5)}
              href="#"
            >
              Websocket
            </a>
          </li>
        </ul>
      </div>
      <div
        className={
          toggleState === 1
            ? cx(styles.panel, styles.activePanel)
            : styles.panel
        }
      >
        <GeneralPanel />
      </div>
      <div
        className={
          toggleState === 2
            ? cx(styles.panel, styles.activePanel)
            : styles.panel
        }
      >
        <BalancePanel />
      </div>
      <div
        className={
          toggleState === 3
            ? cx(styles.panel, styles.activePanel)
            : styles.panel
        }
      >
        <TrandingPanel />
      </div>
    </div>
  );
};

export default Tabs;
