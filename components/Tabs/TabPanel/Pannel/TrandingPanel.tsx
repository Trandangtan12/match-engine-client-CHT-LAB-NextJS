import React, { useState } from "react";
import LimitOrderForm from "../../../From/TradingForm/LimitOrderForm";
import TabPanel from "../TabPanel";

const TrandingPanel = () => {
  const panelList = [
    {
      name: "Limit Order",
      id: 1,
    },
    {
      name: "Market Order",
      id: 2,
    },
    {
      name: "Cancel Oder",
      id: 3,
    },
    {
      name: "Order Transactions",
      id: 4,
    },
    {
      name: "Order Book",
      id: 5,
    },
    {
      name: "Order Depth",
      id: 6,
    },
    {
      name: "Orders Pending",
      id: 7,
    },
    {
      name: "Order Pending Details",
      id: 8,
    },
    {
      name: "Orders Completed",
      id: 9,
    },
    {
      name: "Order Completed Detail",
      id: 10,
    },
  ];
  const formList = [
    {
      id: 1,
      getForm: () => <LimitOrderForm />,
    },
  ];

  const resultList = [
    {
      id: 1,
      getResult: () => <h2>result 1</h2>,
    },
  ];

  return (
    <TabPanel
      panelList={panelList}
      formList={formList}
      resultList={resultList}
    />
  );
};
export default TrandingPanel;
