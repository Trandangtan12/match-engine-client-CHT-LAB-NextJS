import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { match_engine } from "../../lib/match_engine";
import { PostData } from "../../types/match_engine.types";

const initialState = {
  balanceHistory: {},
  isBalanceHistoryLoading: false,

  balanceQuery: {},
  isBalanceQueryLoading: false,

  balanceUpdate: {},
  isBalanceUpdateLoading: false,
};

export const getBalanceHistory = createAsyncThunk(
  "GET_BALANCE_HISTORY",
  async (values: PostData) => {
    const response = await match_engine.getBalanceHistory(values);
    return response;
  }
);

export const getBalanceQuery = createAsyncThunk(
  "GET_BALANCE_QUERY",
  async (values: PostData) => {
    const response = await match_engine.getBalanceQuery(values);
    return response;
  }
);

export const getBalanceUpdate = createAsyncThunk(
  "GET_BALANCE_UPDATE",
  async (values: PostData) => {
    const response = await match_engine.getBalanceUpdate(values);
    return response;
  }
);

export const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Balance History
    builder.addCase(getBalanceHistory.pending, (state) => {
      state.isBalanceHistoryLoading = true;
    }),
      builder.addCase(getBalanceHistory.fulfilled, (state, action) => {
        state.isBalanceHistoryLoading = false;
        state.balanceHistory = action.payload;
      }),
      builder.addCase(getBalanceHistory.rejected, (state) => {
        state.isBalanceHistoryLoading = false;
      });
    // Balance Query
    builder.addCase(getBalanceQuery.pending, (state) => {
      state.isBalanceQueryLoading = true;
    }),
      builder.addCase(getBalanceQuery.fulfilled, (state, action) => {
        state.isBalanceQueryLoading = false;
        state.balanceQuery = action.payload;
      }),
      builder.addCase(getBalanceQuery.rejected, (state) => {
        state.isBalanceQueryLoading = false;
      });

    // Balance Update
    builder.addCase(getBalanceUpdate.pending, (state) => {
      state.isBalanceUpdateLoading = true;
    }),
      builder.addCase(getBalanceUpdate.fulfilled, (state, action) => {
        state.isBalanceUpdateLoading = false;
        state.balanceUpdate = action.payload;
      }),
      builder.addCase(getBalanceUpdate.rejected, (state) => {
        state.isBalanceUpdateLoading = false;
      });
  },
});
export const balanceReducer = balanceSlice.reducer;
