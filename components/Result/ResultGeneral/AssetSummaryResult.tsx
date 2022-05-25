import React from "react";
import { useAppSelector } from "../../../redux/store";

const AssetSummaryResult = () => {
  const { assetSummary } = useAppSelector((state) => ({
    assetSummary: state.general.assetSummary,
  }));
  return <pre>{JSON.stringify(assetSummary, null, 4)}</pre>;
};

export default AssetSummaryResult;
