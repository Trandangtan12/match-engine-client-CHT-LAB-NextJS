import React from "react";
import { useAppSelector } from "../../../redux/store";

const MarketSummaryResult = () => {
  const { marketSummary } = useAppSelector((state) => ({
    marketSummary: state.general.marketSummary,
  }));
  return <pre>{JSON.stringify(marketSummary, null, 4)}</pre>;
};

export default MarketSummaryResult;
