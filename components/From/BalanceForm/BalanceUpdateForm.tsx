import React from "react";
import { useForm } from "react-hook-form";
import { getBalanceUpdate } from "../../../redux/slice/balance.slice";
import { useAppDispatch } from "../../../redux/store";
import Form from "../Form";

interface BalanceUpdate {
  user_id: number;
  asset: string;
  business_type: string;
  business_id: number;
  change: string;
}

const BalanceUpdateForm = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      user_id: 1,
      asset: "BTC",
      business_type: "deposit",
      business_id: 1,
      change: "1.5",
    },
  });
  let call_id = 0;
  const onHandleSubmit = (param: BalanceUpdate) => {
    const params = [...Object.values(param), {}];
    const postdata = {
      id: call_id++,
      method: "balance.update",
      params,
    };
    console.log(postdata);
    dispatch(getBalanceUpdate(postdata));
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
          <input className="form-control" {...register("business_type")} />
        </div>
        <div className="mb-3">
          <label className="form-label">Bussiness Id</label>
          <input
            className="form-control"
            {...register("business_id", {
              valueAsNumber: true,
            })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Change</label>
          <input className="form-control" {...register("change")} />
        </div>
      </div>
    </Form>
  );
};

export default BalanceUpdateForm;
