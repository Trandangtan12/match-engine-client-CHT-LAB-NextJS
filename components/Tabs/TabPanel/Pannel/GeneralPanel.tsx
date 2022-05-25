import React from "react";
import AssetListForm from "../../../From/GeneralForm/AssetListForm";
import AssetSumaryForm from "../../../From/GeneralForm/AssetSumaryForm";
import MarketListForm from "../../../From/GeneralForm/MarketListForm";
import MarketSummaryForm from "../../../From/GeneralForm/MarketSummaryForm";
import AssetListResult from "../../../Result/ResultGeneral/AssetListResult";
import AssetSummaryResult from "../../../Result/ResultGeneral/AssetSummaryResult";
import MarketListResuilt from "../../../Result/ResultGeneral/MarketListResuilt";
import MarketSummaryResult from "../../../Result/ResultGeneral/MarketSummaryResult";
import TabPanel from "../TabPanel";

const GeneralPanel = () => {
  const panelList = [
    {
      id: 1,
      name: "Asset List",
    },
    {
      id: 2,
      name: "Asset Summary",
    },
    {
      id: 3,
      name: "Market List",
    },
    {
      id: 4,
      name: "Market Summary",
    },
  ];
  const formList = [
    {
      id: 1,
      getForm: () => <AssetListForm />,
    },
    {
      id: 2,
      getForm: () => <AssetSumaryForm />,
    },
    {
      id: 3,
      getForm: () => <MarketListForm />,
    },
    {
      id: 4,
      getForm: () => <MarketSummaryForm />,
    },
  ];

  const resultList = [
    {
      id: 1,
      getResult: () => <AssetListResult />,
    },
    {
      id: 2,
      getResult: () => <AssetSummaryResult />,
    },
    {
      id: 3,
      getResult: () => <MarketListResuilt />,
    },
    {
      id: 4,
      getResult: () => <MarketSummaryResult />,
    },
  ];
  return (
    <TabPanel
      resultList={resultList}
      panelList={panelList}
      formList={formList}
    />
  );
};

export default GeneralPanel;
