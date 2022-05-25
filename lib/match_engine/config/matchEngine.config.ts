import _ from "lodash";
import {
  ApiResponse,
  ClientOption,
  PostData,
} from "../../../types/match_engine.types";
import {
  BalanceHistory,
  BalanceQuery,
  BalanceUpdate,
} from "../../../types/balance.type";
import { axiosClient } from "../../../api/axiosClient";
import {
  AssetListType,
  AssetSumaryType,
  MarketListType,
  MarketSummaryType,
} from "../../../types/general.type";

export class MatchEngineClient {
  private _apiEndpoint?: string;
  private _wsEndpoint?: string;

  constructor(opts?: ClientOption) {
    this._apiEndpoint = opts?.apiEndpoint;
    this._wsEndpoint = opts?.wsEndpoint;
  }

  // Balance
  getBalanceHistory(data: PostData): Promise<ApiResponse<BalanceHistory>> {
    return axiosClient(`${this._apiEndpoint}`)
      .post("", JSON.stringify(data))
      .then((response) => _.get(response, "data", null));
  }
  getBalanceUpdate(data: PostData): Promise<ApiResponse<BalanceUpdate>> {
    return axiosClient(`${this._apiEndpoint}`)
      .post("", JSON.stringify(data))
      .then((response) => _.get(response, "data", null));
  }
  getBalanceQuery(data: PostData): Promise<ApiResponse<BalanceQuery>> {
    return axiosClient(`${this._apiEndpoint}`)
      .post("", JSON.stringify(data))
      .then((response) => _.get(response, "data", null));
  }

  // General
  getAssetList(data: PostData): Promise<ApiResponse<AssetListType>> {
    return axiosClient(`${this._apiEndpoint}`)
      .post("", JSON.stringify(data))
      .then((response) => _.get(response, "data", null));
  }

  getAssetSummary(data: PostData): Promise<ApiResponse<AssetSumaryType>> {
    return axiosClient(`${this._apiEndpoint}`)
      .post("", JSON.stringify(data))
      .then((response) => _.get(response, "data", null));
  }

  getMarketList(data: PostData): Promise<ApiResponse<MarketListType>> {
    return axiosClient(`${this._apiEndpoint}`)
      .post("", JSON.stringify(data))
      .then((response) => _.get(response, "data", null));
  }

  getMarketSummary(data: PostData): Promise<ApiResponse<MarketSummaryType>> {
    return axiosClient(`${this._apiEndpoint}`)
      .post("", JSON.stringify(data))
      .then((response) => _.get(response, "data", null));
  }
}
