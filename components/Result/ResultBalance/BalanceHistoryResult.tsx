import React from "react";
import { useAppSelector } from "../../../redux/store";

const BalanceHistoryResult = () => {
  const { balanceHistory } = useAppSelector((state) => ({
    balanceHistory: state.balance.balanceHistory,
  }));
  return <pre>{JSON.stringify(balanceHistory, null, 4)}</pre>;
};

export default BalanceHistoryResult;
