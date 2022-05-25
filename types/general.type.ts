export interface AssetListType {
  name: string;
  prec: string;
}

export interface AssetSumaryType {
  name: string;
  total_balance: string;
  available_balance: string;
  available_count: string;
  freeze_count: number;
  freeze_balance: string;
}

export interface MarketListType {
  name: string;
  stock: string;
  stock_prec: 8;
  money: string;
  fee_prec: number;
  min_amount: string;
  money_prec: number;
}

export interface MarketSummaryType {
  name: string;
  bid_count: number;
  ask_count: number;
  ask_amount: string;
  bid_amount: string;
}
