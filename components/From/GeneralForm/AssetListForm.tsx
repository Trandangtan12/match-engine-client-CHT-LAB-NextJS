import React from "react";
import { useForm } from "react-hook-form";
import { getAssetList } from "../../../redux/slice/general.slice";
import { useAppDispatch } from "../../../redux/store";
import Form from "../Form";

const AssetListForm = () => {
  const dispatch = useAppDispatch();
  const { handleSubmit } = useForm();
  let call_id = 0;
  const onHandleSubmit = () => {
    const postdata = {
      id: call_id++,
      method: "asset.list",
      params: [],
    };
    dispatch(getAssetList(postdata));
  };
  return <Form onFinish={handleSubmit(onHandleSubmit)}>{""}</Form>;
};

export default AssetListForm;
