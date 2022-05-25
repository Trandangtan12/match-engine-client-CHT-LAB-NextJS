import React from "react";
import { useForm } from "react-hook-form";
import { getBalanceHistory } from "../../../redux/slice/balance.slice";
import { useAppDispatch } from "../../../redux/store";
import Form from "../Form";

interface BalanceHistory {
  user_id: number;
  asset: string;
  bussiness_type: string;
  start_time: number;
  end_time: number;
  offset: number;
  limit: number;
}

const BalanceHistoryForm = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<BalanceHistory>({
    defaultValues: {
      user_id: 1,
      asset: "BTC",
      bussiness_type: "deposit",
      start_time: 0,
      end_time: 0,
      offset: 0,
      limit: 50,
    },
  });
  let call_id = 0;
  const onHandleSubmit = (values: BalanceHistory) => {
    const params = Object.values(values);
    const postdata = {
      id: call_id++,
      method: "balance.history",
      params,
    };
    dispatch(getBalanceHistory(postdata));
  };
  return (
    <Form onFinish={handleSubmit(onHandleSubmit)}>
      <div>
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
          <label className="form-label">Asset</label>
          <input className="form-control" {...register("asset")} />
        </div>
        <div className="mb-3">
          <label className="form-label">Bussiness Type</label>
          <input className="form-control" {...register("bussiness_type")} />
        </div>
        <div className="mb-3">
          <label className="form-label">Start Time</label>
          <input
            className="form-control"
            {...register("start_time", {
              valueAsNumber: true,
            })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">End Time</label>
          <input className="form-control" {...register("end_time")} />
        </div>
        <div className="mb-3">
          <label className="form-label">Offset</label>
          <input
            className="form-control"
            {...register("offset", {
              valueAsNumber: true,
            })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Limit</label>
          <input
            className="form-control"
            type="number"
            {...register("limit", {
              valueAsNumber: true,
            })}
          />
        </div>
      </div>
    </Form>
  );
};

export default BalanceHistoryForm;
