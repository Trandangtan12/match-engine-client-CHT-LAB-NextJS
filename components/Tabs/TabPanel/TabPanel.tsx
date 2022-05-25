import React, { ReactNode, useState } from "react";
import styles from "../tabs.module.css";

interface PropsType {
  formList: {
    id: number;
    getForm: () => ReactNode;
  }[];
  panelList: {
    id: number;
    name: string;
  }[];
  resultList: {
    id: number;
    getResult: () => ReactNode;
  }[];
}

const TabPanel = ({ formList, panelList, resultList }: PropsType) => {
  const [toggleState, setToggleState] = useState<number>(1);
  const toggleTab = (index: number) => {
    setToggleState(index);
  };
  return (
    <div className="row">
      <div className="col">
        <ul className="list-group">
          {panelList.map((item) => (
            <li
              key={item.id}
              onClick={() => toggleTab(item.id)}
              className={
                toggleState === item.id
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="col">
        {formList.map((item) => (
          <div
            key={item.id}
            className={
              toggleState === item.id ? styles.activePanel : styles.panel
            }
          >
            {item.getForm()}
          </div>
        ))}
      </div>

      <div className="col">
        {resultList.map((item) => (
          <div
            key={item.id}
            className={
              toggleState === item.id ? styles.activePanel : styles.panel
            }
          >
            {item.getResult()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabPanel;
