import React from "react";
import { useAppSelector } from "../../../redux/store";

const BalanceQueryResult = () => {
  const { balanceQuery } = useAppSelector((state) => ({
    balanceQuery: state.balance.balanceQuery,
  }));
  return <pre>{JSON.stringify(balanceQuery, null, 4)}</pre>;
};

export default BalanceQueryResult;
