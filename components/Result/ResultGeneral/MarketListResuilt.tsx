import React from "react";
import { useAppSelector } from "../../../redux/store";

const MarketListResuilt = () => {
  const { marketList } = useAppSelector((state) => ({
    marketList: state.general.marketList,
  }));
  return <pre>{JSON.stringify(marketList, null, 4)}</pre>;
};

export default MarketListResuilt;
