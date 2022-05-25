import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../redux/store";
import { PostData } from "../../../types/match_engine.types";
import Form from "../Form";

interface LimitOrder {
  user_id: number;
  market: string;
  amount: string;
  taker_fee_rate: string;
  maker_fee_rate: string;
  source: string;
  price: string;
}

const LimitOrderForm = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      user_id: 1,
      market: "BTCUSD",
      amount: "1",
      taker_fee_rate: "0.002",
      maker_fee_rate: "0.001",
      source: "",
      price: "8000",
    },
  });
  const sides = [
    { id: 1, name: "Bid" },
    { id: 2, name: "Ask" },
  ];
  const [sideValue, setSideValue] = useState(1);
  let call_id = 0;
  const onHandleSubmit = (values: LimitOrder) => {
    const newValues = {
      ...values,
      side: sideValue,
    };
    const params = Object.values(newValues);
    const postdata: PostData = {
      id: call_id++,
      method: "limit.order",
      params,
    };
    console.log(postdata.hasOwnProperty("method"));
    // dispatch(getLimit)
  };
  return (
    <Form onFinish={handleSubmit(onHandleSubmit)}>
      <div className="mb-3">
        <label className="form-label">User Id</label>
        <input
          className="form-control"
          {...register("user_id", {
            valueAsNumber: true,
          })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Market</label>
        <input className="form-control" {...register("market")} />
      </div>
      <div className="mb-3">
        <label className="form-label">Side</label>
        <select
          className="form-select"
          onChange={(e) => setSideValue(Number(e.target.value))}
        >
          {sides.map((item, index) => (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Amount</label>
        <input className="form-control" {...register("amount")} />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input className="form-control" {...register("price")} />
      </div>
      <div className="mb-3">
        <label className="form-label">Taker Fee Rate</label>
        <input className="form-control" {...register("taker_fee_rate")} />
      </div>
      <div className="mb-3">
        <label className="form-label">Market Fee Rate</label>
        <input className="form-control" {...register("maker_fee_rate")} />
      </div>
      <div className="mb-3">
        <label className="form-label">Source</label>
        <input className="form-control" {...register("source")} />
      </div>
    </Form>
  );
};

export default LimitOrderForm;
