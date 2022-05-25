import React from "react";
import { useAppSelector } from "../../../redux/store";

const AssetListResult = () => {
  const { assetList } = useAppSelector((state) => ({
    assetList: state.general.assetList,
  }));
  return <pre>{JSON.stringify(assetList, null, 4)}</pre>;
};

export default AssetListResult;
