import {
  faAngleDown,
  faAngleUp,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { swapArray } from "../../../helper/util.helper";
import { getBalanceQuery } from "../../../redux/slice/balance.slice";
import { useAppDispatch } from "../../../redux/store";
import { PostData } from "../../../types/match_engine.types";
import Form from "../Form";

const assetValues = ["DSH", "BCH", "BTC", "XMR", "LTC", "ETH", "ETC", "ZEC"];

const BalanceQueryForm = () => {
  const [assets, setAssets] = useState<string[]>([]);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      user_id: 1,
    },
  });
  const selectEl = useRef<any>(null);
  const dispatch = useAppDispatch();
  let call_id = 0;
  const moveItem = (index: number, newIndex: number) => {
    if (newIndex >= 0 && newIndex < assets.length) {
      setAssets(swapArray(assets, index, newIndex));
    }
  };
  const onHandleSubmit = (data: any) => {
    const newData = {
      ...data,
      assets,
    };
    const params = Object.values(newData).reduce((output: any, depthItem) => {
      return output.concat(depthItem);
    }, []);
    let newParams: any = [];
    if (typeof params === "object") {
      newParams = params;
    } else {
      newParams = [];
    }

    const postdata: PostData = {
      id: call_id++,
      method: "balance.query",
      params: newParams,
    };
    dispatch(getBalanceQuery(postdata));
  };
  const addAsset = () => {
    setAssets((asset) => [...asset, selectEl?.current?.value]);
  };
  const removeAsset = (id: number) => {
    const newAsset = assets.filter((item, index) => index !== id);
    setAssets(newAsset);
  };
  return (
    <Form onFinish={handleSubmit(onHandleSubmit)}>
      <div className="mb-3">
        <label className="form-label">User Id</label>
        <input {...register("user_id")} className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Asset</label>
        <div className="row">
          <div className="col-10">
            <select className="form-select" ref={selectEl}>
              {assetValues.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="col-2">
            {" "}
            <button onClick={addAsset} type="button" className="btn btn-info">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>

        {assets.map((item, index) => (
          <div key={index} className="my-3">
            <div className="row align-items-center">
              <div className="col-8">
                <p className="p-2">{item}</p>
              </div>
              <div className="p-0 col-4">
                {index > 0 && (
                  <button
                    onClick={() => moveItem(index, index - 1)}
                    type="button"
                    className="btn btn-light"
                  >
                    <FontAwesomeIcon icon={faAngleUp} />
                  </button>
                )}

                {index < assets.length - 1 && (
                  <button
                    onClick={() => moveItem(index, index + 1)}
                    type="button"
                    className="btn btn-light"
                  >
                    <FontAwesomeIcon icon={faAngleDown} />
                  </button>
                )}

                <button
                  onClick={() => removeAsset(index)}
                  type="button"
                  className="btn btn-danger"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </div>
        ))}

        <div></div>
      </div>
    </Form>
  );
};

export default BalanceQueryForm;
