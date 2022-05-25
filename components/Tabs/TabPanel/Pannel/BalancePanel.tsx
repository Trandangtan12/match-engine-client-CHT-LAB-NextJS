import React from "react";
import BalanceHistoryForm from "../../../From/BalanceForm/BalanceHistoryForm";
import BalanceHistoryResult from "../../../Result/ResultBalance/BalanceHistoryResult";
import BalanceQueryForm from "../../../From/BalanceForm/BalanceQueryForm";
import BalanceQueryResult from "../../../Result/ResultBalance/BalanceQueryResult";
import BalanceUpdateForm from "../../../From/BalanceForm/BalanceUpdateForm";
import BalanceUpdateResult from "../../../Result/ResultBalance/BalanceUpdateResult";
import TabPanel from "../TabPanel";

const BalancePanel = () => {
  const panelList = [
    {
      id: 1,
      name: "Balance Query",
    },
    {
      id: 2,
      name: "Balance Update",
    },
    {
      id: 3,
      name: "Balance History",
    },
  ];
  const formList = [
    {
      id: 1,
      getForm: () => <BalanceQueryForm />,
    },
    {
      id: 2,
      getForm: () => <BalanceUpdateForm />,
    },
    {
      id: 3,
      getForm: () => <BalanceHistoryForm />,
    },
  ];

  const resultList = [
    {
      id: 1,
      getResult: () => <BalanceQueryResult />,
    },
    {
      id: 2,
      getResult: () => <BalanceUpdateResult />,
    },
    {
      id: 3,
      getResult: () => <BalanceHistoryResult />,
    },
  ];
  return (
    <TabPanel
      resultList={resultList}
      formList={formList}
      panelList={panelList}
    />
  );
};

export default BalancePanel;
