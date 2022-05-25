export interface BalanceHistory {
  offset: number;
  limit: number;
  records: [
    {
      asset: string;
      balance: string;
      business: string;
      change: string;
      detail: string;
      time: number;
    }
  ];
}

export interface BalanceUpdate {
  status: string;
}

export interface Account {
  freeze: string;
  available: string;
}

export interface BalanceQuery {
  DSH: Account;
  BCH: Account;
  BTC: Account;
  XMR: Account;
  LTC: Account;
  ETH: Account;
  ETC: Account;
  ZEC: Account;
}
