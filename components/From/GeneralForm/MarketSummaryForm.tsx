import React from "react";
import { useForm } from "react-hook-form";
import { getMarketSummary } from "../../../redux/slice/general.slice";
import { useAppDispatch } from "../../../redux/store";
import Form from "../Form";

const MarketSummaryForm = () => {
  const { handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  let call_id = 0;
  const onHandleSubmit = () => {
    const postdata = {
      id: call_id++,
      method: "market.summary",
      params: [],
    };
    dispatch(getMarketSummary(postdata));
  };
  return <Form onFinish={handleSubmit(onHandleSubmit)}>{""}</Form>;
};

export default MarketSummaryForm;
