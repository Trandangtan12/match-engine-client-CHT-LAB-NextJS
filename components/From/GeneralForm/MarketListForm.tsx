import React from "react";
import { useForm } from "react-hook-form";
import { getMarketList } from "../../../redux/slice/general.slice";
import { useAppDispatch } from "../../../redux/store";
import Form from "../Form";

const MarketListForm = () => {
  const { handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  let call_id = 0;
  const onHandleSubmit = () => {
    const postdata = {
      id: call_id++,
      method: "market.list",
      params: [],
    };
    dispatch(getMarketList(postdata));
  };
  return <Form onFinish={handleSubmit(onHandleSubmit)}>{""}</Form>;
};

export default MarketListForm;
