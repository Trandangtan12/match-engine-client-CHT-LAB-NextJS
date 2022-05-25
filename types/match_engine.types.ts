export interface ClientOption {
  apiEndpoint: string;
  wsEndpoint: string;
}

export interface PostData {
  id: number;
  method: string;
  params: (string | number)[];
}

export interface ApiResponse<T> {
  error: {
    code: number;
    message: string;
  };
  result: T;
  id: number;
}
