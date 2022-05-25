import React from "react";
import { useForm } from "react-hook-form";
import { getAssetSummary } from "../../../redux/slice/general.slice";
import { useAppDispatch } from "../../../redux/store";
import Form from "../Form";

const AssetSumaryForm = () => {
  const dispatch = useAppDispatch();
  const { handleSubmit } = useForm();
  let call_id = 0;
  const onHandleSubmit = () => {
    const postdata = {
      id: call_id++,
      method: "asset.summary",
      params: [],
    };
    dispatch(getAssetSummary(postdata));
  };
  return <Form onFinish={handleSubmit(onHandleSubmit)}>{""}</Form>;
};

export default AssetSumaryForm;
